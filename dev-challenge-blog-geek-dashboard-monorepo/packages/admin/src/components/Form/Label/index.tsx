import { Container } from "./styles";

interface IProps {
  placeholder: string;
}

export function Label({ placeholder }: IProps) {
  return <Container>{placeholder}</Container>;
}
