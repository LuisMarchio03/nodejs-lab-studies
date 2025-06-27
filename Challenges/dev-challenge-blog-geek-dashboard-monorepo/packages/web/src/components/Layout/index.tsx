import { Flex, Grid } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import Footer from "./Templates/Footer";
import Header from "./Templates/Header";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Grid
      as="main"
      w="100%"
      minHeight="100vh"
      p={{ sm: "2%", lg: "2% 5%" }}
      backgroundColor="blue.900"
      templateRows="100px 160px 1fr 150px"
      templateAreas="
      '. header .'
      '. banner .'
      '. content .'
      '. footer .'
      "
    >
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
