import { Container } from "./styles";

interface IProps {
  placeholder: string;
}

export function Textarea({ placeholder }: IProps) {
  return <Container placeholder={placeholder} />;
}
