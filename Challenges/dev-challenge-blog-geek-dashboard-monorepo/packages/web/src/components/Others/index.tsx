import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/layout";

import React from "react";
import Image from "next/image";

import cenaFilme from "../../assets/cena-do-filme-a-rede-social-2010.png";

import styles from "./styles.module.css";

interface IProps {
  title: string;
}

const Others: React.FC<IProps> = ({ title }) => {
  return (
    <Box as="section" margin="0 10rem" display={{ sm: "none", lg: "block" }}>
      <Heading>Talvez você possa gostar!</Heading>
      <Divider maxW="270px" mt="1rem" mb="2rem" />

      <Flex
        flexDir="column"
        maxH="450px"
        overflow="auto"
        className={styles.overflow}
      >
        <Link cursor="pointer">
          <Flex
            width="100%"
            p="0 0.3%"
            flexDir="column"
            position="relative"
            mb="2rem"
          >
            <Image src={cenaFilme} alt="Banner 01" />
            <Box
              w="100%"
              h="100%"
              position="absolute"
              bg="rgba(0, 0, 0, 0.5)"
            />
            <Heading
              color="white"
              maxW="761px"
              m="1rem 0 4rem 0"
              position="absolute"
              bottom="0"
              p="2%"
            >
              {title}
            </Heading>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default Others;
