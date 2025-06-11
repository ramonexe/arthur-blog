import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { criarPost } from '../api/PostService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreatePost() {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!titulo || !conteudo) {
            toast.error('Título e conteúdo são obrigatórios.');
            return;
        }
        try {
            setLoading(true);
            // criar post
            await criarPost({ titulo, conteudo, youtubeUrl });
            toast.success('Post criado com sucesso!');
            navigate('/');
        } catch (err: any) {
            console.error(err);
            toast.error('Erro ao criar post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Criar Post</h1>
            <Form onSubmit={handleSubmit}>
                <label>
                    Título
                    <input
                        type="text"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </label>
                <label>
                    Conteúdo
                    <textarea
                        rows={6}
                        value={conteudo}
                        onChange={e => setConteudo(e.target.value)}
                    />
                </label>
                <label>
                    URL do YouTube (opcional)
                    <input
                        type="text"
                        value={youtubeUrl}
                        onChange={e => setYoutubeUrl(e.target.value)}
                    />
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Publicar'}
                </button>
            </Form>
            <ToastContainer />
        </Container>
    );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;

    input, textarea {
      margin-top: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
