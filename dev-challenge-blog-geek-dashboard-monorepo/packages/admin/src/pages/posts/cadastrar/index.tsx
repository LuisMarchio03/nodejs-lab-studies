import React, { FormEvent, useRef, useState } from "react";
import { GetServerSideProps } from "next";

import { api } from "../../../services/api";

import toast, { Toaster } from "react-hot-toast";
import { Editor } from "@tinymce/tinymce-react";

import { Header } from "../../../components/Templates/Header";
import { SideBar } from "../../../components/Templates/SideBar";
import { Main } from "../../../components/Main";
import { Content } from "../../../components/Content";
import { Form } from "../../../components/Form";
import { Label } from "../../../components/Form/Label";
import { Input } from "../../../components/Form/input";
import { Select } from "../../../components/Form/Select";
import { Option } from "../../../components/Form/Select/Option";
import { Button } from "../../../components/Button";

import { Container, ContainerForm, Box, Br } from "../../../styles/pages/Posts";

// Interfaces
interface ICategory {
  id: string;
  name: string;
}

interface IResults {
  category: ICategory[];
}

export default function CadastrarPosts({ category }: IResults) {
  const [posts, setPosts] = useState({
    category_id: "",
    title: "",
    content: "",
  });

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setPosts({ ...posts, content: editorRef.current.getContent() });
    }
  };

  console.log(posts);

  const registerPosts = () => {
    api
      .post("/posts", posts)
      .then(() => toast.success("Post cadastrado com sucesso!"))
      .catch((err) => toast.error("Ocorreu um erro ao tentar criar o posts!"));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    registerPosts();
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
                  <Label placeholder="Digite o titulo do seu post" />
                  <Input
                    type="text"
                    placeholder="Digite o titulo do seu post..."
                    value={posts.title}
                    onChange={(event: any) =>
                      setPosts({ ...posts, title: event.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Label placeholder="Selecione a categoria do seu novo post" />
                  <Select
                    value={posts.category_id}
                    onChange={(event: any) =>
                      setPosts({ ...posts, category_id: event.target.value })
                    }
                  >
                    {category.map((category) => (
                      <Option key={category.id} value={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Box>

                <Box>
                  <Label placeholder="Digite o conteúdo do seu post" />
                  <Br />
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_KEY}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    id="2"
                    value={posts.content}
                    onSubmit={log}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </Box>

                <Button>Salvar</Button>
              </Form>
            </ContainerForm>
          </Container>
        </Content>
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: any = await api.get("/categories");
  const response = data.categories;

  return {
    props: {
      category: response,
    },
  };
};
