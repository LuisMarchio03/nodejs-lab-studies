import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { api } from "../../../services/api";

import { Layout } from "../../../Layout";
import { Col, ColText, Row, Table } from "../../../components/Table";
import { Button } from "../../../components/Button";

import { Container } from "./styles";
import { Link } from "react-router-dom";

interface IProducts {
  id: string;
  name: string;
  price: string;
  stock: string;
}

export default function ProductsList() {
  const [products, setProducts] = useState<IProducts[]>();

  // GET
  const getProducts = async () => {
    const { data } = await api.get<any>(`/products`);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // DELETE
  const deleteProduct = (id: string) => {
    api
      .delete(`/products/${id}`)
      .then(() => window.location.reload())
      .catch((err) => toast.error("Ocoreu um erro!"));
  };

  return (
    <Layout>
      <Container>
        <Toaster />

        <Table>
          <Row>
            <Col>
              <ColText>Nome</ColText>
            </Col>
            <Col>
              <ColText>Preço</ColText>
            </Col>
            <Col>
              <ColText>
                Quantidade <br />
                em Estoque
              </ColText>
            </Col>
            <Col>
              <ColText>#</ColText>
            </Col>
            <Col>
              <ColText>#</ColText>
            </Col>
          </Row>

          {products?.map((product) => (
            <Row key={product.id}>
              <Col>
                <ColText>{product.name}</ColText>
              </Col>
              <Col>
                <ColText>R$ {product.price}</ColText>
              </Col>
              <Col>
                <ColText>{product.stock}</ColText>
              </Col>
              <Col>
                <ColText>
                  <Button type="button" className="edit">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/products/edit/${product.id}`}
                    >
                      Editar
                    </Link>
                  </Button>
                </ColText>
              </Col>
              <Col>
                <ColText>
                  <Button
                    type="button"
                    className="delete"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Deletar
                  </Button>
                </ColText>
              </Col>
            </Row>
          ))}
        </Table>
      </Container>
    </Layout>
  );
}
