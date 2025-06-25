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

export default function AdminPanel() {
    const navigate = useNavigate();
    // redireciona se não estiver logado
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/adm');
        }
    }, []);
    const [url, setUrl] = useState("");
    const [titulo, setTitulo] = useState("");
    const [search, setSearch] = useState("");
    const [codigo, setCodigo] = useState("");
    const [links, setLinks] = useState<Link[]>([]);
    const debouncedSearch = useDebounce(search, 500)

    const fetchLinks = async () => {
        try {
            const data = await listarLinks();
            setLinks(data);
        } catch {
            toast.error("Erro ao carregar links.");
        }
    };

    useEffect(() => {
        fetchLinks()
    }, [debouncedSearch])

    const handleSubmit = async () => {
        if (!url || !codigo) {
            toast.error("URL e Código são obrigatórios.");
            return;
        }
        try {
            await encurtarLink(url, codigo, titulo);
            console.log(url, codigo, titulo);
            toast.success("Link encurtado!");
            setUrl("");
            setTitulo("");
            setCodigo("");
            fetchLinks();
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
            <div style={{ margin: "0 auto", textAlign: "center" }}>
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
                        placeholder="Codigo"
                        required
                    />
                    <Button backgroundColor="#0084ff" hoverBackgroundColor="#0060b9" activeBackgroundColor="#004381" alwaysShowText fullWidth icon={<Plus />} onClick={handleSubmit} disabled={!url || !codigo}>Encurtar</Button>
                </InputsContainer>

                {filteredLinks.map(link => (
                    <LinkCard key={link.codigo} link={link} onDelete={handleDelete} />
                ))}

                <ToastContainer />
            </div>
        </ContainerEncurtador>
    );
}

const InputsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ContainerEncurtador = styled.div`
  padding: 1rem;
  margin: 10px;
  background: rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(44, 150, 238, 0.5);
  
  h1 {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Input = styled.input`
  border: 1px solid #0084ff;
  background:rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 4px;
  font-size: 1rem;
  height: 3rem;
  padding: 0 0.5rem;
  box-shadow: 0 0 8px rgba(20, 24, 37, 0.1);
`;

const Searchinput = styled.input`
  border: 1px solid #0084ff73;
  background:rgb(7, 8, 12);
  color: #ffffff;
  border-radius: 50px;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;