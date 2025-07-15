import { Container, Title, ShortUrl, Subtitle } from "./LinkCard.styles";
import { Link } from "../api/linkService";
import { Button } from "dynamix-button";
import { Trash, Copy } from 'lucide-react';
import { toast } from "react-toastify";

interface Props {
  link: Link;
  onDelete: (codigo: string) => void;
}

export default function LinkCard({ link, onDelete }: Props) {
  const shortUrl = `https://arthurgarcia.link/${link.codigo}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast.success('Link copiado para o clipboard!');
    } catch (err) {
      // Fallback para navegadores mais antigos
      const textArea = document.createElement('textarea');
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast.success('Link copiado para o clipboard!');
    }
  };

  return (
    <Container>
      {link.titulo && <Subtitle>{link.titulo}</Subtitle>}
      <Title>URL: {link.urlOriginal}</Title>
      <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        <strong>Link Encurtado:</strong>

        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          <ShortUrl
            href={`https://arthurgarcia.link/${link.codigo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://arthurgarcia.link/{link.codigo}
          </ShortUrl>
          <Copy onClick={copyToClipboard} size={18} style={{ cursor: "pointer", color: "#7a7a7a" }} />
        </div>
      </div>
      <p style={{ fontSize: "0.8rem", color: "#666" }}>
        Data de criação: {new Date(link.dataCriacao).toLocaleString()} <br /> Cliques: {link.cliques}
      </p>
      <Button backgroundColor="#0084ff" hoverBackgroundColor="#0060b9" activeBackgroundColor="#004381" icon={<Trash />} onClick={() => onDelete(link.codigo)}>Excluir</Button>
    </Container>
  );
}