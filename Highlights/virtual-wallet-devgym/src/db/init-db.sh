#!/bin/bash

# Script para inicializar o ambiente de banco de dados PostgreSQL
# Autor: Luís Gabriel Marchió Batista
# Data: 18/07/2025

# Configuração de logs
LOG_DIR="logs/init-db-sh"
DATETIME=$(date +"%Y-%m-%d_%H-%M-%S")
LOG_FILE="$LOG_DIR/init-db-$DATETIME.log"
LATEST_LOG="$LOG_DIR/latest.log"

# Criar diretório de logs se não existir
mkdir -p "$LOG_DIR"

# Configurar redirecionamento de saída para o arquivo de log e terminal
exec > >(tee -a "$LOG_FILE") 2>&1

# Criar/atualizar link simbólico para o log mais recente
if [ -L "$LATEST_LOG" ]; then
    rm "$LATEST_LOG"
fi
ln -s "$LOG_FILE" "$LATEST_LOG"

# Configurações
COMPOSE_FILE="docker-compose.yml"
DB_CONTAINER_NAME="db-postgres"  # Nome correto do container conforme docker-compose.yml
DB_NAME="postgres"  # Nome do banco específico da aplicação
DB_USER="postgres"           # Usuario padrão
DB_PASSWORD="postgres"       # Senha padrão - AJUSTE CONFORME SUA CONFIGURAÇÃO
DB_HOST="localhost"
DB_PORT="5432"
MAX_WAIT_TIME=60            # Tempo máximo de espera em segundos

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir mensagens coloridas
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Função para verificar se um comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Função para verificar se o Docker está rodando
check_docker() {
    print_info "Verificando se o Docker está rodando..."
    
    if ! command_exists docker; then
        print_error "Docker não está instalado!"
        exit 1
    fi
    
    if ! docker info >/dev/null 2>&1; then
        print_error "Docker não está rodando! Inicie o Docker e tente novamente."
        exit 1
    fi
    
    print_success "Docker está rodando"
}

# Função para verificar se o docker-compose existe
check_compose_file() {
    print_info "Verificando arquivo docker-compose..."
    
    # Caminho correto para o docker-compose.yml
    if [ ! -f "docker/$COMPOSE_FILE" ]; then
        print_error "Arquivo $COMPOSE_FILE não encontrado no diretório /docker/!"
        exit 1
    fi
    
    print_success "Arquivo docker-compose encontrado"
}

# Função para verificar se os arquivos SQL existem
check_sql_files() {
    print_info "Verificando arquivos SQL..."
    
    local missing_files=()
    
    if [ ! -f "src/db/sql/create-db.sql" ]; then
        missing_files+=("create-db.sql")
    fi
    
    # Nome correto do arquivo
    if [ ! -f "src/db/sql/create-table.sql" ]; then
        missing_files+=("create-table.sql")
    fi
    
    if [ ${#missing_files[@]} -gt 0 ]; then
        print_error "Arquivos SQL não encontrados:"
        for file in "${missing_files[@]}"; do
            echo "  - $file"
        done
        exit 1
    fi
    
    print_success "Arquivos SQL encontrados"
}

# Função para verificar se o PostgreSQL está rodando
check_postgres_running() {
    print_info "Verificando se o PostgreSQL está rodando..."
    
    # Verifica se o container está rodando
    if docker ps --format "table {{.Names}}" | grep -q "$DB_CONTAINER_NAME"; then
        print_success "Container PostgreSQL está rodando"
        return 0
    else
        print_warning "Container PostgreSQL não está rodando"
        return 1
    fi
}

# Função para iniciar o Docker Compose
start_docker_compose() {
    print_info "Iniciando containers com Docker Compose..."
    
    # Caminho correto para o docker-compose.yml
    if docker-compose -f "docker/$COMPOSE_FILE" up -d; then
        print_success "Containers iniciados com sucesso"
    else
        print_error "Falha ao iniciar containers"
        exit 1
    fi
}

# Função para aguardar o PostgreSQL ficar pronto
wait_for_postgres() {
    print_info "Aguardando PostgreSQL ficar pronto..."
    
    local counter=0
    
    while [ $counter -lt $MAX_WAIT_TIME ]; do
        if docker exec $DB_CONTAINER_NAME pg_isready -h localhost -p 5432 >/dev/null 2>&1; then
            print_success "PostgreSQL está pronto para receber conexões"
            return 0
        fi
        
        echo -n "."
        sleep 2
        counter=$((counter + 2))
    done
    
    print_error "Timeout: PostgreSQL não ficou pronto em ${MAX_WAIT_TIME}s"
    exit 1
}

# Função para criar o banco de dados específico da aplicação
create_database() {
    print_info "Verificando se o banco de dados '$DB_NAME' existe..."
    
    # Verifica se o banco já existe
    local db_exists=$(docker exec $DB_CONTAINER_NAME psql -U $DB_USER -lqt | cut -d \| -f 1 | grep -w "$DB_NAME" | wc -l)
    
    if [ "$db_exists" -eq 1 ]; then
        print_success "Banco de dados '$DB_NAME' já existe"
    else
        print_info "Criando banco de dados '$DB_NAME'..."
        if docker exec -i $DB_CONTAINER_NAME psql -U $DB_USER -c "CREATE DATABASE \"$DB_NAME\";"; then
            print_success "Banco de dados '$DB_NAME' criado com sucesso"
        else
            print_error "Falha ao criar banco de dados '$DB_NAME'"
            exit 1
        fi
    fi
}

# Função para executar arquivo SQL
execute_sql_file() {
    local sql_file=$1
    local description=$2
    
    print_info "Executando $description ($sql_file)..."
    
    # Executa o arquivo SQL no banco específico da aplicação
    if docker exec -i $DB_CONTAINER_NAME psql -U $DB_USER -d $DB_NAME < "$sql_file"; then
        print_success "$description executado com sucesso"
    else
        print_error "Falha ao executar $description"
        exit 1
    fi
}

# Função principal
main() {
    print_info "=== Iniciando Script de Inicialização do Banco de Dados ==="
    print_info "Log sendo salvo em: $LOG_FILE"
    
    # Verificações iniciais
    check_docker
    check_compose_file
    check_sql_files
    
    # Verificar se PostgreSQL está rodando
    if ! check_postgres_running; then
        start_docker_compose
        wait_for_postgres
    else
        # Mesmo se estiver rodando, aguardar para ter certeza que está pronto
        wait_for_postgres
    fi
    
    # Criar banco de dados específico da aplicação
    create_database
    
    # Executar scripts SQL
    print_info "Executando scripts de inicialização..."
    
    # Executar create-table.sql (nome correto do arquivo)
    execute_sql_file "sql/create-table.sql" "Script de criação das tabelas"
    
    print_success "=== Inicialização do banco de dados concluída com sucesso! ==="
    
    # Informações úteis
    print_info "Informações de conexão:"
    echo "  Host: $DB_HOST"
    echo "  Port: $DB_PORT"
    echo "  User: $DB_USER"
    echo "  Database: $DB_NAME"
    
    # Verificar se pgAdmin está rodando
    if docker ps --format "table {{.Names}}" | grep -q "pgadmin"; then
        print_info "pgAdmin está disponível em: http://localhost:8080"
        print_info "  Email: user@localhost.com"
        print_info "  Senha: password"
    fi
    
    # Criar arquivo .env com as configurações de conexão se não existir
    if [ ! -f "../../.env" ]; then
        print_info "Criando arquivo .env com configurações de conexão..."
        echo "DATABASE_URL=postgres://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME" > "../../.env"
        print_success "Arquivo .env criado com sucesso"
    fi
    
    print_info "Log completo disponível em: $LOG_FILE"
}

# Executar função principal
main "$@"