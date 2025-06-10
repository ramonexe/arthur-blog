import { Container, Title, ShortUrl, DeleteButton } from "./LinkCard.styles";
import { Link } from "../api/linkService";

interface Props {
  link: Link;
  onDelete: (codigo: string) => void;
}

export default function LinkCard({ link, onDelete }: Props) {
  return (
    <Container>
      <Title>{link.urlOriginal}</Title>
      <ShortUrl href={`http://localhost:8080/${link.codigo}`} target="_blank" rel="noopener noreferrer">
        http://localhost:8080/{link.codigo}
      </ShortUrl>
      <p>{new Date(link.dataCriacao).toLocaleString()}</p>
      <DeleteButton onClick={() => onDelete(link.codigo)}>Excluir</DeleteButton>
    </Container>
  );
}