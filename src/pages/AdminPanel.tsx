import { useEffect, useState } from "react";
import { encurtarLink, listarLinks, excluirLink, Link } from "../api/linkService";
import LinkCard from "../components/LinkCard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "dynamix-button";
import styled from "styled-components";
import { Plus } from "lucide-react";
import { useDebounce } from '../hooks/useDebounce'

export default function AdminPanel() {
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
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <h1>Encurtar Link</h1>
            <div style={{ marginBottom: "1rem", margin: "0 auto" }}>
                <Searchinput
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar por URL, código ou título"
                />
            </div>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", justifyContent: "left", alignItems: "center" }}>
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
                <Button icon={<Plus />} onClick={handleSubmit} disabled={!url || !codigo}>Encurtar</Button>
            </div>

            {filteredLinks.map(link => (
                <LinkCard key={link.codigo} link={link} onDelete={handleDelete} />
            ))}

            <ToastContainer />
        </div>
    );
}

const Input = styled.input`
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-size: 1rem;
  height: 3rem;
  padding: 0 0.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Searchinput = styled.input`
  border: 1px solid #ffffff;
  border-radius: 50px;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;