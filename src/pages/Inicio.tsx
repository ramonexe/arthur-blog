import { useEffect, useState } from 'react';
import { listarPosts, Post } from '../api/PostService';
import PostCard from '../components/PostCard';
import styled from 'styled-components';
import TrueFocus from '../components/TrueFocus';
import ScrambledText from '../components/ScrambleText';
import Noise from '../components/Noise';
import { Button } from 'dynamix-button';
import { BookOpenText, MessageCircleMore, Youtube } from 'lucide-react';

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
                    POR DENTRO DE TUDO SOBRE NFTS, AIRDROPS E RENDA EXTRA
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
                <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginBottom: '2rem', alignItems: 'center' }}>
                    <Button alwaysShowText icon={<Youtube/>} size='lg'
                    backgroundColor='#FF0000'
                    hoverBackgroundColor='#FF4500'
                    activeBackgroundColor='#8f2310'
                    >YOUTUBE</Button>
                    <Button alwaysShowText icon={<BookOpenText/>} size='lg'
                    backgroundColor='#105db4'
                    hoverBackgroundColor='#00c3ff'
                    activeBackgroundColor='#123788'
                    >CURSO</Button>
                    <Button alwaysShowText icon={<MessageCircleMore/>} size='lg'
                    backgroundColor='#25D366'
                    hoverBackgroundColor='#128C7E'
                    activeBackgroundColor='#075E54'
                    >WHATSAPP</Button>
                </div>
                <h3>OPORTUNIDADES RECENTES</h3>
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
    height: 80vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 4px solid;
    border-image: linear-gradient(90deg, #123788, #00c3ff, #123788) 1;
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