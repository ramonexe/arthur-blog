import { Container, Title, ShortUrl, Subtitle } from "./LinkCard.styles";
import { Link } from "../api/linkService";
import { Button } from "dynamix-button";
import { Trash } from 'lucide-react';

interface Props {
  link: Link;
  onDelete: (codigo: string) => void;
}

export default function LinkCard({ link, onDelete }: Props) {
  return (
    <Container>
      {link.titulo && <Subtitle>{link.titulo}</Subtitle>}
      <Title>URL: {link.urlOriginal}</Title>
      <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        <strong>Link Encurtado:</strong>
        <ShortUrl
          href={`http://localhost:8080/${link.codigo}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          http://localhost:8080/{link.codigo}
        </ShortUrl>
      </div>
      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        Data de criação: {new Date(link.dataCriacao).toLocaleString()} <br/> Cliques: {link.cliques}
      </p>
      <Button icon={<Trash />} onClick={() => onDelete(link.codigo)}>Excluir</Button>
    </Container>
  );
}