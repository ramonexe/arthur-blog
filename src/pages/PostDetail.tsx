import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPost, Post } from '../api/PostService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'dynamix-button';
import { ArrowLeft } from 'lucide-react';
import { BarLoader } from 'react-spinners';

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

  if (loading) return <LoadingContainer><BarLoader color="#00c3ff" /></LoadingContainer>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <Container>
      <Button backgroundColor="#0084ff" hoverBackgroundColor="#0060b9" activeBackgroundColor="#004381" icon={<ArrowLeft />} onClick={() => navigate(-1)}>Voltar</Button>
      <Title>{post.titulo}</Title>
      {post.youtubeUrl && (
        <VideoWrapper>
          <iframe
            src={post.youtubeUrl.replace('watch?v=', 'embed/')}
            title="YouTube video"
            frameBorder="2"
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h1`
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
