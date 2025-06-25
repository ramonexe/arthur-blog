import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { criarPost } from '../api/PostService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'dynamix-button';

export default function CreatePost() {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {

        if (!titulo || !conteudo) {
            toast.error('Título e conteúdo são obrigatórios.');
            return;
        }
        try {
            setLoading(true);
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
                    <input
                        type="text"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        placeholder='Título do post'
                    />
                </label>
                <label>
                    <textarea
                        rows={6}
                        value={conteudo}
                        onChange={e => setConteudo(e.target.value)}
                        placeholder='Conteúdo do post'
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={youtubeUrl}
                        onChange={e => setYoutubeUrl(e.target.value)}
                        placeholder='URL do vídeo no YouTube'
                    />
                </label>
                <Button backgroundColor="#0084ff" hoverBackgroundColor="#0060b9" activeBackgroundColor="#004381" onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Enviando...' : 'Publicar'}
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
}

const Container = styled.div`
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
      width: 70vw;
      border: 1px solid #0084ff;
      background:rgb(7, 8, 12);
      color: #ffffff;
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

    @media (max-width: 768px) {
        label input, label textarea {
        width: 100%;
        }
    }
`;
