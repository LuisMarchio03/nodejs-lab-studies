# Virtual Wallet DevGym

Uma aplicação de carteira virtual desenvolvida com Node.js, Express e PostgreSQL que permite aos usuários realizar transações financeiras entre si.

## Estrutura do Projeto

```
├── docker/                # Configurações do Docker
│   └── docker-compose.yml # Arquivo de configuração do Docker Compose
├── src/                   # Código fonte da aplicação
│   ├── controllers/       # Controladores da aplicação
│   ├── db/                # Configuração do banco de dados
│   ├── exceptions/        # Tratamento de exceções
│   ├── models/            # Modelos de dados
│   ├── repositories/      # Repositórios para acesso ao banco de dados
│   ├── routes/            # Rotas da API
│   ├── services/          # Lógica de negócios
│   └── index.ts           # Ponto de entrada da aplicação
└── package.json           # Dependências e scripts
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **TypeScript**: Superset tipado de JavaScript
- **Express**: Framework web para Node.js
- **PostgreSQL**: Banco de dados relacional
- **Docker**: Containerização da aplicação

## Pré-requisitos

- Node.js (versão 22 recomendada)
- Docker e Docker Compose
- npm ou yarn

## Como Executar

### 1. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
```

### 2. Iniciar o Banco de Dados

Primeiro, crie a rede do Docker:

```bash
docker network create postgres-network
```

Em seguida, inicie os containers do PostgreSQL e pgAdmin:

```bash
cd docker
docker compose up -d
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Executar a Aplicação

Para desenvolvimento:

```bash
npm run dev
```

Para produção:

```bash
npm run build
npm start
```

## Endpoints da API

- **POST /transaction**: Realiza uma transação entre usuários

## Scripts Disponíveis

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento com hot-reload
- `npm start`: Inicia a aplicação em modo de produção
- `npm run build`: Compila o TypeScript para JavaScript
- `npm run type-check`: Verifica tipos sem gerar arquivos
- `npm run lint`: Executa o linter
- `npm run lint:fix`: Corrige problemas de linting
- `npm run format`: Formata o código com Prettier
- `npm run format:check`: Verifica a formatação do código

## Acesso ao pgAdmin

O pgAdmin está disponível em http://localhost:8080

- **Email**: user@localhost.com
- **Senha**: password

Para conectar ao PostgreSQL através do pgAdmin, use:
- **Host**: db-postgres
- **Porta**: 5432
- **Usuário**: postgres
- **Senha**: postgres
- **Banco de dados**: postgres