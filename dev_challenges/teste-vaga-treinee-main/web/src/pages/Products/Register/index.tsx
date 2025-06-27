import { FormEvent, useState } from "react";

import { api } from "../../../services/api";
import toast, { Toaster } from "react-hot-toast";

import { Layout } from "../../../Layout";
import { Division } from "../../../components/Division";
import { Form } from "../../../components/Form";
import { Label } from "../../../components/Form/Label";
import { Input } from "../../../components/Form/Input";
import { Button } from "../../../components/Button";

import { Container, Section, Box, Heading } from "./styles";

interface IProducts {
  name: string;
  price: string;
  stock: string;
}

export default function ProductsRegister() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");

  //POST
  const product: IProducts = {
    name: name,
    price: price,
    stock: stock,
  };

  const registerProduct = () => {
    api
      .post("/products", product)
      .then(() => toast.success("Produto cadastrado com sucesso!"))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    registerProduct();
  };

  return (
    <Layout>
      <Container>
        <Toaster />
        <Section>
          <Heading>Cadastrar produtos</Heading>
          <Division />

          <Form onSubmit={handleSubmit}>
            <Box>
              <Label>Digite o nome do produto que deseja cadastrar</Label>
              <Input
                type="text"
                placeholder="Ex: Notebook"
                value={name}
                onChange={(event: any) => setName(event.target.value)}
              />
            </Box>

            <Box>
              <Label>Digite o preço do produto acima</Label>
              <Input
                type="text"
                placeholder="Ex: 3000"
                value={price}
                onChange={(event: any) => setPrice(event.target.value)}
              />
            </Box>

            <Box>
              <Label>Digite o a quantidade em estoque do produto acima</Label>
              <Input
                type="text"
                placeholder="Ex: 200"
                value={stock}
                onChange={(event: any) => setStock(event.target.value)}
              />
            </Box>

            <Button type="submit">Cadastrar produto</Button>
          </Form>
        </Section>
      </Container>
    </Layout>
  );
}
