import { useRouter } from "next/router";
import Link from "next/link";

import { Anchor, Container, Li, Nav, Ul } from "./styles";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";

export function SideBar() {
  const { pathname } = useRouter();

  return (
    <Container>
      <Nav>
        <Ul>
          <Li>
            <AiOutlineHome />
            <Link href="/" passHref>
              <Anchor className={`${pathname === "/" ? "active" : "normal"}`}>
                HOME
              </Anchor>
            </Link>
          </Li>

          <Li>
            <AiOutlineBook />
            <Link href="/categories/cadastrar" passHref>
              <Anchor
                className={`${
                  pathname === "/categories/cadastrar" ? "active" : "normal"
                }`}
              >
                CADASTRAR CATEGORIAS
              </Anchor>
            </Link>
          </Li>

          <Li>
            <BsCardChecklist />
            <Link href="/categories/listar" passHref>
              <Anchor
                className={`${
                  pathname === "/categories/listar" ? "active" : "normal"
                }`}
              >
                LISTAR CATEGORIAS
              </Anchor>
            </Link>
          </Li>

          <Li>
            <AiOutlineBook />
            <Link href="/posts/cadastrar" passHref>
              <Anchor
                className={`${
                  pathname === "/posts/cadastrar" ? "active" : "normal"
                }`}
              >
                CADASTRAR POSTS
              </Anchor>
            </Link>
          </Li>

          <Li>
            <BsCardChecklist />
            <Link href="/posts/listar" passHref>
              <Anchor
                className={`${
                  pathname === "/posts/listar" ? "active" : "normal"
                }`}
              >
                LISTAR POSTS
              </Anchor>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
}
