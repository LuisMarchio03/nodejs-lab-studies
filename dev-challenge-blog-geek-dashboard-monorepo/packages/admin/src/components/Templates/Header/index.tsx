import { Container, Flex, Logo, Notification, Search, Support } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>Logo</Logo>

      <Support></Support>

      <Flex>
        <Notification></Notification>
        <Search></Search>
      </Flex>
    </Container>
  );
}
