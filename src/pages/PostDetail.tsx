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
      <Content dangerouslySetInnerHTML={{ __html: post.conteudo }} />
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
  color: #0084ff;
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
  line-height: 1.8;
  margin-top: 1rem;
  color: #ffffff;
  
  h1, h2, h3, h4, h5, h6 {
    color: #0084ff !important;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.25rem; }
  h4 { font-size: 1.1rem; }
  h5 { font-size: 1rem; }
  h6 { font-size: 0.9rem; }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }
  
  strong {
    font-weight: 600;
    color: #ffffff;
  }
  
  em {
    font-style: italic;
    color: #cccccc;
  }
  
  a {
    color: #0084ff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  blockquote {
    border-left: 4px solid #0084ff;
    background-color: rgba(0, 132, 255, 0.1);
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 0 4px 4px 0;
    color: #cccccc;
  }
  
  code {
    background-color: rgba(0, 132, 255, 0.1);
    color: #00a6ff;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }
  
  pre {
    background-color: rgba(0, 132, 255, 0.1);
    border: 1px solid #0084ff;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1rem 0;
    
    code {
      background: none;
      padding: 0;
      border-radius: 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1rem 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    
    th, td {
      border: 1px solid rgba(0, 132, 255, 0.3);
      padding: 0.75rem;
      text-align: left;
    }
    
    th {
      background-color: rgba(0, 132, 255, 0.1);
      font-weight: 600;
      color: #0084ff;
    }
    
    td {
      color: #ffffff;
    }
  }
  
  hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, #0084ff, transparent);
    margin: 2rem 0;
  }
`;