import React from "react";
import { GetServerSideProps } from "next";

import { api } from "../../../services/api";

/* Components */
import { Header } from "../../../components/Templates/Header";
import { SideBar } from "../../../components/Templates/SideBar";
import { Main } from "../../../components/Main";
import { Content } from "../../../components/Content";
import { Table } from "../../../components/Table";

/* Components - Table */
import { Tbody, Td, Th, Thead, Tr } from "../../../components/Table/styles";

/* Styles page Posts */
import { Container, ContainerLista } from "../../../styles/pages/Posts";
import { Button } from "../../../components/Button";
import toast, { Toaster } from "react-hot-toast";

// Interfaces
interface ICategory {
  id: string;
  name: string;
}

interface IResults {
  category: ICategory[];
}

export default function ListarCategory({ category }: IResults) {
  // DELETE
  const deleteCategory = (id: string) => {
    api
      .delete(`/categories/${id}`)
      .then(() => window.location.reload())
      .catch((err) => toast.error("Ocoreu um erro!"));
  };

  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <Content>
          <Toaster />

          <Container>
            <ContainerLista>
              <Table>
                <Thead>
                  <tr>
                    <Th>Listar todas os categorias</Th>
                  </tr>
                </Thead>
                <Tbody>
                  {category.map((category) => (
                    <Tr key={category.id}>
                      <Th>{category.name}</Th>
                      <Td>
                        <Button className="category edit">Editar</Button>

                        <Button
                          className="category delete"
                          onClick={() => deleteCategory(category.id)}
                        >
                          Deletar
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </ContainerLista>
          </Container>
        </Content>
      </Main>
    </>
  );
}

//? SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: any = await api.get("/categories");
  const response = data.categories;

  return {
    props: {
      category: response,
    },
  };
};
