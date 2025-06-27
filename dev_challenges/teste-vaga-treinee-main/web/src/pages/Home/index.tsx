import { Link } from "react-router-dom";

import { Layout } from "../../Layout";
import { Division } from "../../components/Division";
import { Button } from "../../components/Button";

import { Container, Welcome, Heading, Support } from "./styles";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Welcome>
          <Heading>Bem vindo, Luís Gabriel</Heading>
          <Division />
        </Welcome>

        <Support>
          <Heading>O que você deseja fazer?</Heading>
          <Division />

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/products/register"
          >
            <Button>Cadastrar um novo produto</Button>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/products/list"
          >
            <Button>Visualizar todos os produtos</Button>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/products/list"
          >
            <Button>Editar ou Deletar um produto existente</Button>
          </Link>
        </Support>
      </Container>
    </Layout>
  );
}
