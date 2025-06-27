import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Spinner } from "@chakra-ui/spinner";

import Form from "../components/Form";
import Main from "../components/Main";

export default function secondForm() {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [genre, setGenre] = useState("Prefiro não dizer");

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios.post("/api/form", {
      name: name,
      email: email,
      cpf: cpf,
      genre: genre,
    });
    setRedirect(true);
    router.push("/previews");
  };

  return (
    <Main>
      <Form onSubmit={formSubmit}>
        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="name">
            Digite o seu nome:
          </Text>
          <Input
            type="text"
            id="name"
            placeholder="Ex: Luís Gabriel Marchió Batista"
            backgroundColor="gray.800"
            border="0"
            mt={2}
            value={name}
            onChange={(event: any) => setName(event.target.value)}
          />
        </Box>

        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="email">
            Digite o seu melhor email:
          </Text>
          <Input
            type="email"
            id="email"
            placeholder="Ex: luisgabrielmarchio75@gmail.com"
            backgroundColor="gray.800"
            border="0"
            mt={2}
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
          />
        </Box>

        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="cpf">
            Digite o seu cpf:
          </Text>
          <Input
            type="text"
            id="cpf"
            placeholder="Ex: 000.000.000-00"
            backgroundColor="gray.800"
            border="0"
            mt={2}
            value={cpf}
            onChange={(event: any) => setCpf(event.target.value)}
          />
        </Box>

        <Box mb={6}>
          <Text as="label" fontSize="1.1rem" for-id="cpf">
            Gênero:
          </Text>
          <Select
            backgroundColor="gray.800"
            border="0"
            mt={2}
            value={genre}
            onChange={(event: any) => setGenre(event.target.value)}
          >
            <option style={{ color: "#121214" }} value="Prefiro não dizer">
              Prefiro não dizer
            </option>
            <option style={{ color: "#121214" }} value="Masculino">
              Masculino
            </option>
            <option style={{ color: "#121214" }} value="Feminino">
              Feminino
            </option>
          </Select>
        </Box>
        {redirect === false ? (
          <Flex
            mt={6}
            mb={6}
            alignContent="center"
            justifyContent="center"
            w="100%"
          >
            <Button
              type="submit"
              w="40%"
              backgroundColor="whatsapp.500"
              _hover={{ backgroundColor: "whatsapp.600" }}
            >
              Enviar
            </Button>
          </Flex>
        ) : (
          <Flex
            mt={6}
            mb={6}
            alignContent="center"
            justifyContent="center"
            w="100%"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        )}
      </Form>
    </Main>
  );
}
