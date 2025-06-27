import React from "react";

import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import Image from "next/image";
import thumb from "../../assets/thumb.png";
import { Button } from "@chakra-ui/button";

interface IProps {
  title: string;
  text: string;
}

const Content: React.FC<IProps> = ({ title, text }) => {
  return (
    <Link cursor="pointer">
      <Flex alignItems="center">
        <Box w="250px">
          <Image src={thumb} alt="Banner 01" />
        </Box>
        <Box>
          <Heading color="gray.200" fontSize="sm" maxW="761px" m="1rem">
            {title}
          </Heading>
          <Text
            color="gray.200"
            fontSize="sm"
            maxW="761px"
            m="1rem"
            dangerouslySetInnerHTML={{ __html: text.slice(0, 100) }}
          />
        </Box>
      </Flex>
    </Link>
  );
};

export default Content;
