import { Container, Image, Content, Title, Snippet } from './PostCard.styles';
import { Post } from '../api/PostService';
import { useNavigate } from 'react-router-dom';

interface Props { post: Post; }

export default function PostCard({ post }: Props) {
  const navigate = useNavigate();
  // extrai ID do YouTube para montar thumbnail
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
  return (
    <Container onClick={() => navigate(`/posts/${post.id}`)}>
      {thumbnailUrl && <Image src={thumbnailUrl} alt={post.titulo} />}
      <Content>
        <Title>{post.titulo}</Title>
        <Snippet>{post.conteudo}</Snippet>
      </Content>
    </Container>
  );
}
