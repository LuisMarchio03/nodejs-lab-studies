import { useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";

import axios from "axios";

import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import Main from "../../components/Main";

interface IForm {
  name: string;
  email: string;
  cpf: string;
  genre: string;
}

interface IResults {
  data: IForm[];
}

export default function Previews({ data }: IResults) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  const filterName = data.filter((d) => d.name.includes(search));

  return (
    <Main>
      <Flex flexDir="column" p={10}>
        <Heading fontSize="5xl">Previews all results:</Heading>
        <Flex as="form" mt={10}>
          <Input
            w="100%"
            backgroundColor="gray.700"
            border="0"
            borderRadius="0"
            placeholder="Buscar pelo nome. Exemplo: Luis"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <Button
            borderRadius="0"
            type="submit"
            w="30%"
            backgroundColor="whatsapp.600"
            _hover={{ backgroundColor: "whatsapp.700" }}
            onClick={handleSearch}
            cursor="no-drop"
          >
            Buscar
          </Button>
        </Flex>
        <Box mt={8}>
          {filterName.map((data) => (
            <Box
              key={data.name}
              as="ul"
              mt={6}
              p={4}
              listStyleType="none"
              backgroundColor="gray.700"
              border="2px solid #8257e6"
            >
              <Text mb={4} as="li" fontSize="lg">
                Nome: {data.name}
              </Text>
              <Text mb={4} as="li" fontSize="lg">
                Email: {data.email}
              </Text>
              <Text mb={4} as="li" fontSize="lg">
                Cpf: {data.cpf}
              </Text>
              <Text as="li">Gênero: {data.genre}</Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/formGet");

  return {
    props: { data },
  };
};
