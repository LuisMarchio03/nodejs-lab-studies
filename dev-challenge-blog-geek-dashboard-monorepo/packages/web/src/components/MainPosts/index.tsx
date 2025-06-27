import React from "react";

import { Box, Heading, Link } from "@chakra-ui/layout";
import Image from "next/image";

import banner01 from "../../assets/banner01.png";

interface IProps {
  title: string;
}

const MainPosts: React.FC<IProps> = ({ title }) => {
  return (
    <Box w="100%">
      <Link cursor="pointer">
        <Image src={banner01} alt="Banner 01" />
        <Heading color="gray.200" maxW="761px" m="1rem 0 4rem 0">
          {title}
        </Heading>
      </Link>
    </Box>
  );
};

export default MainPosts;
