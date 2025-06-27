import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/layout";

import React from "react";
import Image from "next/image";

import game from "../../assets/game.png";

import styles from "./styles.module.css";

interface IProps {
  title: string;
}

const Recent: React.FC<IProps> = ({ title }) => {
  return (
    <Flex
      flexDir="column"
      mt={{ sm: "5rem", lg: "5rem" }}
      gridArea="recents"
      color="white"
      maxW={{ sm: "100%", md: "100%", lg: "100%" }}
      overflow="auto"
      className={styles.overflow}
    >
      <Heading>Notícias mais recentes</Heading>
      <Divider maxW="270px" mt="1rem" mb="2rem" />

      <Flex
        flexDir={{ sm: "column", md: "row", lg: "row" }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex
          width={{ sm: "100%", md: "45%", lg: "33%" }}
          flexDir="column"
          position="relative"
          mb="2rem"
          cursor="pointer"
        >
          <Image src={game} alt="Banner 01" />
          <Box w="100%" h="100%" position="absolute" bg="rgba(0, 0, 0, 0.5)" />
          <Heading
            color="gray.200"
            maxW="761px"
            m="1rem 0 4rem 0"
            position="absolute"
            bottom="0"
            p="2%"
          >
            {title}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Recent;
