import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const [isMobile, SetIsMobile] = useState<Boolean>(true);

  return (
    <Flex
      as="header"
      gridArea="header"
      justifyContent="space-between"
      w="100%"
      pt="1rem"
      pb="1rem"
      color="white"
      fontSize="sm"
    >
      <Heading color="purple.500">Logo</Heading>
      {isMobile === false ? (
        <Box as="nav">
          <Flex as="ul" listStyleType="none" p="1rem" alignItems="center">
            <Text
              as="li"
              mr="3rem"
              cursor="pointer"
              _hover={{ textDecoration: "underline " }}
            >
              Home
            </Text>
            <Text
              as="li"
              mr="3rem"
              cursor="pointer"
              _hover={{ textDecoration: "underline " }}
            >
              Séries
            </Text>
            <Text
              as="li"
              mr="3rem"
              cursor="pointer"
              _hover={{ textDecoration: "underline " }}
            >
              Filmes
            </Text>
            <Text
              as="li"
              mr="3rem"
              cursor="pointer"
              _hover={{ textDecoration: "underline " }}
            >
              Animes
            </Text>
            <Text
              as="li"
              mr="3rem"
              cursor="pointer"
              _hover={{ textDecoration: "underline " }}
            >
              Games
            </Text>
            <Button
              fontSize="sm"
              background="transparent"
              p="1.3rem"
              mr="2rem"
              border="1px solid #8257E6"
            >
              Entrar
            </Button>
            <Button
              fontSize="sm"
              background="transparent"
              p="1.3rem"
              border="1px solid #8257E6"
            >
              Cadastrar
            </Button>
          </Flex>
        </Box>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
            border="0"
            borderRadius="0"
            p="2rem"
          />
          <MenuList backgroundColor="blue.900" p="7rem" fontSize="1.7rem">
            <MenuItem
              _hover={{ filter: "brightness(0.9)", color: "black" }}
              mb="2rem"
            >
              Home
            </MenuItem>
            <MenuItem
              _hover={{ filter: "brightness(0.9)", color: "black" }}
              mb="2rem"
            >
              Séries
            </MenuItem>
            <MenuItem
              _hover={{ filter: "brightness(0.9)", color: "black" }}
              mb="2rem"
            >
              Filmes
            </MenuItem>
            <MenuItem
              _hover={{ filter: "brightness(0.9)", color: "black" }}
              mb="2rem"
            >
              Animes
            </MenuItem>
            <MenuItem
              _hover={{ filter: "brightness(0.9)", color: "black" }}
              mb="2rem"
            >
              Games
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default Header;
