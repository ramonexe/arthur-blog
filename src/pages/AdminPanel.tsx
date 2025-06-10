// src/pages/AdminPanel.tsx
import { useEffect, useState } from "react";
import { encurtarLink, listarLinks, excluirLink, Link } from "../api/linkService";
import LinkCard from "../components/LinkCard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AdminPanel() {
  const [url, setUrl] = useState("");
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
      await encurtarLink(url);
      toast.success("Link encurtado!");
      setUrl("");
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

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Encurtar Link</h1>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Cole a URL aqui"
        style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />
      <button onClick={handleSubmit}>Encurtar</button>

      {links.map((link) => (
        <LinkCard key={link.codigo} link={link} onDelete={handleDelete} />
      ))}

      <ToastContainer />
    </div>
  );
}