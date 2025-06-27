import { FormEvent } from "react";
import { Container } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent) => void;
}

export function Input({ type, placeholder, value, onChange }: IProps) {
  return (
    <Container
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
