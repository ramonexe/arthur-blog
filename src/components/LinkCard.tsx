import { Container, Title, ShortUrl } from "./LinkCard.styles";
import { Link } from "../api/linkService";
import styled from "styled-components";
import { Button } from "dynamix-button";
import { Trash } from 'lucide-react';

interface Props {
    link: Link;
    onDelete: (codigo: string) => void;
}

export default function LinkCard({ link, onDelete }: Props) {
    return (
        <Container>
            <Title>URL: {link.urlOriginal}</Title>
            <Short>
                <strong>Link Encurtado:</strong>
                <ShortUrl href={`http://localhost:8080/${link.codigo}`} target="_blank" rel="noopener noreferrer">
                    http://localhost:8080/{link.codigo}
                </ShortUrl>
            </Short>
            <DataCriacao>
                <strong>Data de Criação:</strong>
                <p>{new Date(link.dataCriacao).toLocaleString()}</p>
            </DataCriacao>
            <Button icon={<Trash />} onClick={() => onDelete(link.codigo)}>Excluir</Button>
        </Container>
    );
}

const Short = styled.div`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #333;
`;

const DataCriacao = styled.div`
    display: flex;
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.5rem;
        p {
            margin: 0;
            margin-left: 0.5rem;
            margin-bottom: 0.5rem;
        }
`;