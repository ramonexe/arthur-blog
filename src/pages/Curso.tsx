import { Helmet } from "react-helmet";
import ASCIIText from "../components/Layout/ASCIIText";
import Container from "../components/Layout/ContainerAll";
import styled from "styled-components";

export default function Curso() {
    return (
        <Main>
            <Helmet>
                <title>Curso – Arthur Garcia Blog</title>
                <meta name="description" content="ARTHUR GARCIA CRYPTO – NFTs, Airdrops e renda extra." />
            </Helmet>
            <Container>
                <ASCIIText
                    text='EM BREVE'
                    enableWaves={false}
                    asciiFontSize={7}
                    textFontSize={32}
                    planeBaseHeight={5}
                />
            </Container>
        </Main>
    );
}

const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    --s: 300px;
    --c1: #122125;
    --c2: #090b0e;
    
    --_g: #0000 90deg,var(--c1) 0;
    background: 
        conic-gradient(from 90deg at 2px 2px,var(--_g)),
        conic-gradient(from 90deg at 1px 1px,var(--_g)),
        var(--c2);
    background-size: var(--s) var(--s), calc(var(--s)/5) calc(var(--s)/5);
`;


