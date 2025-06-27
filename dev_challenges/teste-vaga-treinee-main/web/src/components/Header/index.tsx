import { Link } from "react-router-dom";
import { Container, Logo, Anchor } from "./styles";

import { AiOutlineHome } from "react-icons/ai";

export function Header() {
  return (
    <Container>
      <Logo>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Logo
        </Link>
      </Logo>
      <Link style={{ textDecoration: "none" }} to="/">
        <Anchor>
          <AiOutlineHome /> Home
        </Anchor>
      </Link>
    </Container>
  );
}
