import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex
      gridArea="footer"
      color="white"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <Heading color="purple.500" fontSize="md" mb="1rem">
          Naped
        </Heading>
        <Text fontSize="1.4rem">
          Todas as imagens de filmes, séries e etc são marcas registradas dos
          seus respectivos proprietários.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
