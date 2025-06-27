import { ReactNode } from "react";
import { Container } from "./styles";

interface IProps {
  value: string;
  children: ReactNode;
}

export function Option({ value, children }: IProps) {
  return <Container value={value}>{children}</Container>;
}
