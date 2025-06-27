import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";

import { Header } from "../components/Templates/Header";
import { SideBar } from "../components/Templates/SideBar";
import { Content } from "../components/Content";
import { Main } from "../components/Main";
import { Division } from "../components/Division";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Form/input";

import {
  AnnotationSection,
  Container,
  CtaSection,
  WelcomeSection,
  Flex,
} from "../styles/pages/Home";

export default function Home() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <Content>
          <Container>
            <WelcomeSection>
              <h2>{"Olá user, seja bem vindo!".toUpperCase()}</h2>
              <Division />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                quia error odio rerum ex, vel et a id ea eos natus nisi nemo
                nobis laborum accusamus in hic! Explicabo, quo.
              </p>
            </WelcomeSection>

            <CtaSection>
              <h2>{"O que você gostaria de fazer?".toUpperCase()}</h2>
              <Division />
              <Flex>
                <Button>Cadastrar categorias</Button>
                <Button>Listar categorias</Button>
                <Button>Cadastrar posts</Button>
                <Button>Listar posts</Button>
                <Button>Metricas</Button>
              </Flex>
            </CtaSection>

            <AnnotationSection>
              <h2>{"Criar uma anotação:".toUpperCase()}</h2>
              <Division />
              <Form onSubmit={() => console.log("teste")}>
                <Input
                  type="text"
                  placeholder="Digite um titulo para a sua anotação"
                  value="teste"
                  onChange={(event) => event.target}
                />
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_KEY}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  id="1"
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
                <Button>Enviar</Button>
              </Form>
            </AnnotationSection>
          </Container>
        </Content>
      </Main>
    </>
  );
}
