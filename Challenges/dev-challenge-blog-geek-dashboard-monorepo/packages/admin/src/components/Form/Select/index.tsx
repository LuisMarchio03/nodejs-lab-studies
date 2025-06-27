import { FormEvent, ReactNode } from "react";
import { Container } from "./styles";

interface IProps {
  children: ReactNode;
  value: string;
  onChange: (event: FormEvent) => void;
}

export function Select({ children, value, onChange }: IProps) {
  return (
    <Container value={value} onChange={onChange}>
      {children}
    </Container>
  );
}
