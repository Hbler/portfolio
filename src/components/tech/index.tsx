import { Container } from "./style";

interface Props {
  tech: string;
}
export default function Tech({ tech }: Props) {
  const name = tech.split("-")[1].toUpperCase();

  return (
    <Container>
      <i className={tech}></i>
      <p>{name}</p>
    </Container>
  );
}
