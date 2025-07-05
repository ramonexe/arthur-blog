import styled from "styled-components"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Features } from "../components/Features"
import { Pricing } from "../components/Pricing"
import { Testimonials } from "../components/Testimonials"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../components/ScrollToTop"

const Main = styled.main`
  min-height: 100vh;
  background: rgb(9, 11, 14);
`

export default function CursoPage() {
  return (
    <Main>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </Main>
  )
}
