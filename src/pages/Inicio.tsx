import { useEffect, useState } from 'react';
import { listarPosts, Post } from '../api/PostService';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import TrueFocus from '../components/TrueFocus';

export default function Inicio() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        listarPosts()
            .then(data => setPosts(data))
            .catch(() => { });
    }, []);
    return (
        <>
            <Banner>
                <TrueFocus
                    sentence="ARTHUR GARCIA"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="blue"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                />
            </Banner>
            <Container>
                <h1>Posts</h1>
                <Grid>
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </Grid>
            </Container>
        </>
    );
}

const Banner = styled.div`
  background: #08080883;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;