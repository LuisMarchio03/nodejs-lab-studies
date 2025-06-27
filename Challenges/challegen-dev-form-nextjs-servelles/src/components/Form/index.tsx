import { Flex } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onSubmit: any;
}

const Form: React.FC<IProps> = ({ children, onSubmit }) => {
  return (
    <Flex
      as="form"
      onSubmit={onSubmit}
      h="80%"
      w="60%"
      p={5}
      flexDir="column"
      backgroundColor="gray.700"
      border="2px solid #8257e6"
    >
      {children}
    </Flex>
  );
};

export default Form;
