import { Helmet } from "react-helmet";
import ASCIIText from "../components/Layout/AsciiText";
import styled from 'styled-components';
import ShinyText from "../components/Layout/ShinyText";
import Container from "../components/Layout/ContainerAll";
import Lottie from "lottie-react";
import animationData from "../assets/bgcurso.json";

export default function Curso() {
    return (
        <>
            <Helmet>
                <title>Curso – Arthur Garcia Blog</title>
                <meta name="description" content="ARTHUR GARCIA CRYPTO – NFTs, Airdrops e renda extra." />
            </Helmet>
            <Container>
                <Background>
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </Background>
                <FullScreenContainer>
                    <ASCIIText
                        text='<AGC/> Class'
                        enableWaves={true}
                        asciiFontSize={8}
                        textFontSize={38}
                        planeBaseHeight={5}
                    />
                    <div style={{ textAlign: 'center', marginTop: 'auto', paddingBottom: '10rem', width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '1.2rem', color: '#ffffff', cursor: 'pointer', zIndex: 99 }}>
                            <ShinyText text="PARTICIPAR" disabled={false} speed={3} />
                        </div>
                    </div>
                </FullScreenContainer>
            </Container>
        </>
    );
}

const FullScreenContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  opacity: 0.2;
  height: 100vh;
  inset: 0;
  z-index: 0;
`;
