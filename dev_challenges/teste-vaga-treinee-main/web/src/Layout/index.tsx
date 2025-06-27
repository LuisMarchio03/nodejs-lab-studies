import { ReactNode } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { SideBar } from "../components/SideBar";

interface IProps {
  children: ReactNode;
}

export function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <Main>
        <SideBar />
        <Content>{children}</Content>
      </Main>
    </>
  );
}
