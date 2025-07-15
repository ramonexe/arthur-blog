import styled from "styled-components"
/*import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Features } from "../components/Features"
import { Pricing } from "../components/Pricing"
import { Testimonials } from "../components/Testimonials"*/
import { Helmet } from "react-helmet"
import ShinyText from "../components/Layout/ShinyText"

const Main = styled.main`
  min-height: 100vh;
  background: rgb(9, 11, 14);
`

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
  color: #666;
  font-weight: bold;
  text-align: center;
`

export default function CursoPage() {
  return (
    <Main>
      <Helmet>
        <title>Crypto & NFTs - ARTHUR GARCIA CRYPTO</title>
        <meta name="description" content="Fique por dentro da atualidade no mundo de Crypto e NFTs" />
        <meta property="og:title" content="Crypto & NFTs - ARTHUR GARCIA CRYPTO" />
        <meta property="og:description" content="Fique por dentro da atualidade no mundo de Crypto e NFTs" />
        <meta property="og:image" content="/CryptoAndNFTs.png" />
      </Helmet>
      <ComingSoon><ShinyText text="EM BREVE" disabled={false} speed={3} className='custom-class' /></ComingSoon>
      {/*<Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials /> */}
    </Main>
  )
}
