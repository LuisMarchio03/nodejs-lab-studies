import { FormEvent, ReactNode } from "react";
import { Container } from "./styles";

interface IProps {
  children: ReactNode;
  onSubmit: (event: FormEvent) => void;
}

export function Form({ children, onSubmit }: IProps) {
  return <Container onSubmit={onSubmit}>{children}</Container>;
}
