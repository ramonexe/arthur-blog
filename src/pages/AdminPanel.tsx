import { useEffect, useState } from "react";
import { encurtarLink, listarLinks, excluirLink, Link } from "../api/linkService";
import LinkCard from "../components/LinkCard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "dynamix-button";
import styled from "styled-components";
import { Plus } from "lucide-react";

export default function AdminPanel() {
    const [url, setUrl] = useState("");
    const [titulo, setTitulo] = useState("");
    const [search, setSearch] = useState("");
    const [links, setLinks] = useState<Link[]>([]);

    const fetchLinks = async () => {
        try {
            const data = await listarLinks();
            setLinks(data);
        } catch {
            toast.error("Erro ao carregar links.");
        }
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    const handleSubmit = async () => {
        if (!url) return;
        try {
            await encurtarLink(url, titulo);
            toast.success("Link encurtado!");
            setUrl("");
            setTitulo("");
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
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h1>Encurtar Link</h1>
            <div style={{ marginBottom: "1rem", margin: "0 auto" }}>
                <Searchinput
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Buscar por URL, código ou título"
                />
            </div>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", justifyContent: "center", width: "100%" }}>
                <Input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    placeholder="Cole a URL aqui"
                />
                <Input
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    placeholder="Título (opcional)"
                />
                <Button icon={<Plus />} onClick={handleSubmit}>Encurtar</Button>
            </div>

            {filteredLinks.map(link => (
                <LinkCard key={link.codigo} link={link} onDelete={handleDelete} />
            ))}

            <ToastContainer />
        </div>
    );
}

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  height: 2.5rem;
  padding: 0 0.5rem;
`;

const Searchinput = styled.input`
  border: 1px solid #9b9b9b;
  border-radius: 50px;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;