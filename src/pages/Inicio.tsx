import { useEffect, useState } from 'react';
import { listarPosts, Post } from '../api/PostService';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import TrueFocus from '../components/Layout/TrueFocus';
import ScrambledText from '../components/Layout/ScrambleText';
import Noise from '../components/Layout/Noise';
import { Button } from 'dynamix-button';
import { BookOpenText, MessageCircleMore, Youtube } from 'lucide-react';
import { BarLoader } from 'react-spinners';
import { Helmet } from 'react-helmet'
import AnimatedContent from '../components/Layout/AnimatedContent';
import ShinyText from '../components/Layout/ShinyText';

export default function Inicio() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await listarPosts();
                console.log('Dados recebidos:', data);
                if (Array.isArray(data)) {
                    setPosts(data);
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
                <title>Início – Arthur Garcia Blog</title>
                <meta name="description" content="ARTHUR GARCIA CRYPTO – NFTs, Airdrops e renda extra." />
            </Helmet>
            <Banner>
                <TrueFocus
                    sentence="ARTHUR GARCIA CRYPTO"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#0099ff"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                />
                <ScrambledText
                    className="scrambled-text-demo"
                    radius={50}
                    duration={0.5}
                    speed={0.3}
                    scrambleChars={".:"}>
                    QUER POUPAR SEU TEMPO EM CRYPTO E NÃO PERDER NENHUMA CALL? <br /> ACOMPANHE AGORA E RECEBA DICAS EXCLUSIVAS QUASE TODOS OS DIAS!
                </ScrambledText>
                <Noise
                    patternSize={250}
                    patternScaleX={2}
                    patternScaleY={2}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                />
            </Banner >
            <Container>
                <ButtonsWrapper>
                    <Button
                        fullWidth
                        alwaysShowText
                        icon={<Youtube />}
                        size="lg"
                        backgroundColor="#131518"
                        borderColor='#e93630b2'
                        hoverBackgroundColor="#1d2125"
                        activeBackgroundColor="#8f2310"
                    >
                        <ShinyText text="YOUTUBE" disabled={false} speed={3} className='custom-class' />
                    </Button>
                    <Button
                        fullWidth
                        alwaysShowText
                        icon={<BookOpenText />}
                        size="lg"
                        backgroundColor="#131518"
                        borderColor='#00c3ffb3'
                        hoverBackgroundColor="#1d2125"
                        activeBackgroundColor="#123788"
                        onClick={() => window.open('/curso', '_blank')}
                    >
                        <ShinyText text="CURSO" disabled={false} speed={3} className='custom-class' />
                    </Button>
                    <Button
                        fullWidth
                        alwaysShowText
                        icon={<MessageCircleMore />}
                        size="lg"
                        backgroundColor="#131518"
                        borderColor='#128c7ebc'
                        hoverBackgroundColor="#1d2125"
                        activeBackgroundColor="#075E54"
                    >
                        <ShinyText text="WHATSAPP" disabled={false} speed={3} className='custom-class' />
                    </Button>
                </ButtonsWrapper>
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={0.5}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.1}
                >
                    <h3>OPORTUNIDADES RECENTES</h3>
                    <Grid>
                        {Array.isArray(posts) && posts.length > 0 ? (
                            posts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))
                        ) : (
                            <p>Nenhum post encontrado.</p>
                        )}
                    </Grid>
                </AnimatedContent>
            </Container>
        </>
    );
}

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Banner = styled.div`
    background: #08080883;
    display: flex;
    height: 85vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 4px solid;
    border-image: linear-gradient(90deg, #123788, #00c3ff, #123788) 1;

    @media (max-width: 768px) {
        padding: 0;
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