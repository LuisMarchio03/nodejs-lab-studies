import React, { FormEvent, useState } from "react";
import { api } from "../../../services/api";

import { Header } from "../../../components/Templates/Header";
import { SideBar } from "../../../components/Templates/SideBar";
import { Main } from "../../../components/Main";
import { Content } from "../../../components/Content";
import { Form } from "../../../components/Form";
import { Label } from "../../../components/Form/Label";
import { Input } from "../../../components/Form/input";
import { Button } from "../../../components/Button";

import { Container, ContainerForm, Box } from "../../../styles/pages/Posts";
import toast, { Toaster } from "react-hot-toast";

export default function CadastrarCategory() {
  const [category, setCategory] = useState<string>();

  //POST
  const categoryPost = {
    name: category,
  };

  const registerCategory = () => {
    api
      .post("/categories", categoryPost)
      .then(() => toast.success("Categoria cadastrada com sucesso!"))
      .catch((err) =>
        toast.error("Ocorreu um erro ao tentar criar a categoria!")
      );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    registerCategory();
  };

  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <Content>
          <Toaster />
          <Container>
            <ContainerForm>
              <Form onSubmit={handleSubmit}>
                <Box>
                  <Label placeholder="Digite a sua nova categoria" />
                  <Input
                    type="text"
                    placeholder="Digite a sua nova categoria..."
                    value={category}
                    onChange={(event: any) => setCategory(event.target.value)}
                  />
                </Box>

                <Button type="submit">Salvar</Button>
              </Form>
            </ContainerForm>
          </Container>
        </Content>
      </Main>
    </>
  );
}
