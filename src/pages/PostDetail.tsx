import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPost, Post } from '../api/PostService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'dynamix-button';
import { ArrowLeft } from 'lucide-react';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getPost(Number(id))
      .then(data => setPost(data))
      .catch(() => toast.error('Erro ao carregar post.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <Container>
      <Button icon={<ArrowLeft />} onClick={() => navigate(-1)}>Voltar</Button>
      <Title>{post.titulo}</Title>
      {post.youtubeUrl && (
        <VideoWrapper>
          <iframe
            src={post.youtubeUrl.replace('watch?v=', 'embed/')}
            title="YouTube video"
            frameBorder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
      )}
      <Content>{post.conteudo}</Content>
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const VideoWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

const Content = styled.div`
  line-height: 1.6;
  margin-top: 1rem;
`;
