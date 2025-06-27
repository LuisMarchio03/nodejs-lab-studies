import { Link } from "react-router-dom";
import { Anchor, Container, Li, Nav, Ul } from "./styles";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";

export function SideBar() {
  const pathname = window.location.pathname;

  return (
    <Container>
      <Nav>
        <Ul>
          <Li>
            <AiOutlineHome />
            <Link style={{ textDecoration: "none" }} to="/">
              <Anchor className={`${pathname === "/" ? "active" : ""}`}>
                HOME
              </Anchor>
            </Link>
          </Li>

          <Li>
            <AiOutlineBook />
            <Link style={{ textDecoration: "none" }} to="/products/register">
              <Anchor
                className={`${
                  pathname === "/products/register" ? "active" : ""
                }`}
              >
                CADASTRAR PRODUTOS
              </Anchor>
            </Link>
          </Li>

          <Li>
            <BsCardChecklist />
            <Link style={{ textDecoration: "none" }} to="/products/list">
              <Anchor
                className={`${pathname === "/products/list" ? "active" : ""}`}
              >
                LISTAR PRODUTOS
              </Anchor>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
}
