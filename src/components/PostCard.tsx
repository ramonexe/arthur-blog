import { Container, Image, Content, Title, Snippet } from './PostCard.styles';
import { Post } from '../api/PostService';
import { useNavigate } from 'react-router-dom';

interface Props { post: Post; }

export default function PostCard({ post }: Props) {
  const navigate = useNavigate();
  
  const extractTextFromHTML = (html: string): string => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  
  const truncateText = (text: string, maxLength: number = 150): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const getYouTubeId = (url: string): string | null => {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
      if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
    } catch {
      return null;
    }
    return null;
  };

  const thumbnailId = post.youtubeUrl ? getYouTubeId(post.youtubeUrl) : null;
  const thumbnailUrl = thumbnailId
    ? `https://img.youtube.com/vi/${thumbnailId}/hqdefault.jpg`
    : undefined;

  const cleanText = extractTextFromHTML(post.conteudo);
  const snippetText = truncateText(cleanText);

  return (
    <Container onClick={() => navigate(`/posts/${post.id}`)}>
      {thumbnailUrl && <Image src={thumbnailUrl} alt={post.titulo} />}
      <Content>
        <Title>{post.titulo}</Title>
        <Snippet>{snippetText}</Snippet>
      </Content>
    </Container>
  );
}