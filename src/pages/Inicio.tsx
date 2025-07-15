import { useEffect, useState } from 'react';
import { listarPosts, Post } from '../api/PostService';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import ScrambledText from '../components/Layout/ScrambleText';
import AnimatedBackground from '../components/Layout/AnimatedBackground';
import { BarLoader } from 'react-spinners';
import { Helmet } from 'react-helmet'

export default function Inicio() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await listarPosts();
                console.log('Dados recebidos:', data);
                if (Array.isArray(data)) {
                    const sortedPosts = data.sort((a, b) => {
                        const dateA = new Date(a.data_criacao || a.id).getTime();
                        const dateB = new Date(b.data_criacao || b.id).getTime();
                        return dateB - dateA;
                    });
                    setPosts(sortedPosts);
                } else {
                    console.error('Dados recebidos não são um array:', data);
                    setPosts([]);
                }
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <LoadingContainer><BarLoader color="#00c3ff" /></LoadingContainer>;

    return (
        <>
            <Helmet>
                <title>Arthur Garcia Crypto - Blog sobre Crypto e NFTs</title>
                <meta name="description" content="Fique por dentro da atualidade no mundo de Crypto e NFTs" />
                <meta property="og:title" content="Crypto & NFTs - ARTHUR GARCIA CRYPTO" />
                <meta property="og:description" content="Fique por dentro da atualidade no mundo de Crypto e NFTs" />
                <meta property="og:image" content="/ArthurGarciaCrypto.png" />
            </Helmet>
            <Banner>
                <AnimatedBackground variant="minimal" showOverlay={true} />
                <Title>ARTHUR GARCIA CRYPTO</Title>
                <ScrambledText
                    className="scrambled-text-demo"
                    radius={50}
                    duration={0.5}
                    speed={0.3}
                    scrambleChars={".:"}>
                    QUER POUPAR SEU TEMPO EM CRYPTO E NÃO PERDER NENHUMA CALL? <br /> ACOMPANHE AGORA E RECEBA DICAS EXCLUSIVAS QUASE TODOS OS DIAS!
                </ScrambledText>
            </Banner >
            <Container>
                <h3>OPORTUNIDADES RECENTES</h3>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map(post => (
                        <Grid>
                            <PostCard key={post.id} post={post} />
                        </Grid>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', width: '100%', color: '#666', height: '30vh', marginTop: '2rem' }}>
                        <p>Nenhum post encontrado.</p>
                    </div>
                )}
            </Container>
        </>
    );
}

const Title = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.5rem;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Banner = styled.div`
    display: flex;
    height: 70vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgb(9, 11, 14) 0%, rgb(14, 21, 32) 50%, rgb(9, 11, 14) 100%);
    border-bottom: 4px solid;
    border-image: linear-gradient(90deg, #123788, #00c3ff, #123788) 1;

    @media (max-width: 768px) {
        height: 40vh;
    }
`;

const Container = styled.div`
  padding: 2rem;
  padding-top: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;