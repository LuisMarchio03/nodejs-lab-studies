import { Flex } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Main: React.FC = ({ children }: IProps) => {
  return (
    <Flex
      as="main"
      alignItems="center"
      justifyContent="center"
      width="100%"
      minH="100vh"
      backgroundColor="gray.800"
      color="white"
    >
      {children}
    </Flex>
  );
};

export default Main;
