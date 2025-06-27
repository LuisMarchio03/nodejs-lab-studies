import React, { useEffect, useState } from "react";

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
import { GetServerSideProps } from "next";
import { api } from "../../../services/api";
import { Button } from "../../../components/Button";
import toast, { Toaster } from "react-hot-toast";

interface IPosts {
  id: string;
  category_id: string;
  title: string;
  content: string;
}

interface IResults {
  posts: IPosts[];
}

export default function ListarPosts({ posts }: IResults) {
  // DELETE
  const deletePost = (id: string) => {
    api
      .delete(`/posts/${id}`)
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
                    <Th>Listar todos os posts</Th>
                  </tr>
                </Thead>
                <Tbody>
                  {posts.map((post) => {
                    return (
                      <Tr key={post.id}>
                        <Th>{post.title}</Th>
                        <Td>{post.content}</Td>
                        <Td>
                          <Button className="edit">Editar</Button>

                          <Button
                            className="delete"
                            onClick={() => deletePost(post.id)}
                          >
                            Deletar
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
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
  const { data }: any = await api.get("/posts");
  const response = data.posts;

  return {
    props: {
      posts: response,
    },
  };
};
