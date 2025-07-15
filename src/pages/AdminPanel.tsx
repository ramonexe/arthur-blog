import { useEffect, useState } from "react";
import { encurtarLink, listarLinks, excluirLink, Link } from "../api/linkService";
import LinkCard from "../components/LinkCard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "dynamix-button";
import styled from "styled-components";
import { Plus } from "lucide-react";
import { useDebounce } from '../hooks/useDebounce';
import { useNavigate } from "react-router-dom";

interface AdminPanelProps {
    onLinkCreated?: () => void; // Função opcional para fechar modal
}

export default function AdminPanel({ onLinkCreated }: AdminPanelProps) {
    const navigate = useNavigate();

    // redireciona se não estiver logado (apenas quando não está no modal)
    useEffect(() => {
        if (!onLinkCreated && !sessionStorage.getItem('user')) {
            navigate('/adm');
        }
    }, [onLinkCreated, navigate]);

    const [url, setUrl] = useState("");
    const [titulo, setTitulo] = useState("");
    const [search, setSearch] = useState("");
    const [codigo, setCodigo] = useState("");
    const [links, setLinks] = useState<Link[]>([]);
    const debouncedSearch = useDebounce(search, 500);

    const fetchLinks = async () => {
        try {
            const data = await listarLinks();
            const sortedLinks = data.sort((a, b) => {
                const dateA = new Date(a.dataCriacao).getTime();
                const dateB = new Date(b.dataCriacao).getTime();
                return dateB - dateA;
            });
            setLinks(sortedLinks);
        } catch {
            toast.error("Erro ao carregar links.");
        }
    };

    useEffect(() => {
        fetchLinks();
    }, [debouncedSearch]);

    const handleSubmit = async () => {
        if (!url || !codigo) {
            toast.error("URL e Código são obrigatórios.");
            return;
        }
        try {
            await encurtarLink(url, codigo, titulo);
            console.log(url, codigo, titulo);
            toast.success("Link encurtado!");

            // Resetar formulário
            setUrl("");
            setTitulo("");
            setCodigo("");
            fetchLinks();

            // Se está sendo usado no modal, fechar modal
            if (onLinkCreated) {
                setTimeout(() => {
                    onLinkCreated();
                }, 1000);
            }
        } catch {
            toast.error("Erro ao encurtar.");
        }
    };

    const handleDelete = async (codigo: string) => {
        try {
            await excluirLink(codigo);
            toast.success("Link excluído.");
            fetchLinks();
        } catch {
            toast.error("Erro ao excluir.");
        }
    };

    const filteredLinks = links.filter(link =>
        link.urlOriginal.includes(search) ||
        link.codigo.includes(search) ||
        (link.titulo?.includes(search) ?? false)
    );

    return (
        <ContainerEncurtador>
            <Title>Encurtar Link</Title>

            <div style={{ marginBottom: "1rem", margin: "0 auto" }}>
                <Searchinput
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar por URL, código ou título"
                />
            </div>

            <InputsContainer>
                <Input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    placeholder="Cole a URL aqui"
                    required
                />
                <Input
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    placeholder="Título (opcional)"
                />
                <Input
                    value={codigo}
                    onChange={e => setCodigo(e.target.value)}
                    placeholder="Código"
                    required
                />
            </InputsContainer>

            <ButtonsContainer>
                <Button
                    backgroundColor="#0084ff"
                    hoverBackgroundColor="#0060b9"
                    activeBackgroundColor="#004381"
                    alwaysShowText
                    fullWidth
                    icon={<Plus />}
                    onClick={handleSubmit}
                    disabled={!url || !codigo}
                >
                    Encurtar
                </Button>

                {onLinkCreated && (
                    <Button
                        backgroundColor="#666666"
                        hoverBackgroundColor="#555555"
                        activeBackgroundColor="#444444"
                        onClick={onLinkCreated}
                        fullWidth
                    >
                        Cancelar
                    </Button>
                )}
            </ButtonsContainer>

            <LinksContainer>
                {filteredLinks.map(link => (
                    <LinkCard key={link.codigo} link={link} onDelete={handleDelete} />
                ))}
            </LinksContainer>

            <ToastContainer />
        </ContainerEncurtador>
    );
}

const Title = styled.h1`
    margin-bottom: 1rem;
    color: #0084ff;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const LinksContainer = styled.div`
    margin-top: 1rem;
`;

const InputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
    gap: 0.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ContainerEncurtador = styled.div`
  padding: 1rem;
  margin: 10px;
  overflow-x: hidden;
  background: rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(44, 150, 238, 0.5);
  max-width: 800px;
  width: 90vw;
  
  @media (max-width: 768px) {
    width: 85vw;
  }

    @media (max-width: 480px) {
    width: 80vw;
    }
`;

const Input = styled.input`
  border: 1px solid #0084ff;
  background: rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 4px;
  font-size: 1rem;
  height: 3rem;
  padding: 0 0.5rem;
  box-shadow: 0 0 8px rgba(20, 24, 37, 0.1);
  
  &:focus {
    outline: none;
    border-color: #00a6ff;
    box-shadow: 0 0 0 2px rgba(0, 132, 255, 0.2);
  }

  &::placeholder {
    color: #888;
  }
`;

const Searchinput = styled.input`
  border: 1px solid #0084ff73;
  background: rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 50px;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: #0084ff;
    box-shadow: 0 0 0 2px rgba(0, 132, 255, 0.2);
  }

  &::placeholder {
    color: #888;
  }
`;