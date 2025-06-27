import { ReactNode } from "react";
import { Container } from "./styles";

interface IProps {
  children: ReactNode;
}

export function Table({ children }: IProps) {
  return <Container>{children}</Container>;
}
