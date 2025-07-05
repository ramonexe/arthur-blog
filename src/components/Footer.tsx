import styled from "styled-components"
import { Mail, MapPin, Twitter, Youtube, MessageCircleMore } from "lucide-react"
import TrueFocusLogo from "./Layout/TrueFocusLogo"
import { useNavigate } from "react-router-dom"

const FooterContainer = styled.footer`
  background: rgb(9, 11, 14);
  border-top: 1px solid #1f2937;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const LogoSection = styled.div`
  grid-column: span 1;

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Description = styled.p`
  color: #9ca3af;
  margin-bottom: 1.5rem;
  max-width: 24rem;
  line-height: 1.6;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  background: #1f2937;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #06b6d4;
    transform: translateY(-2px);
  }
`

const Section = styled.div``

const SectionTitle = styled.h3`
  color: white;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LinkItem = styled.li`
  margin-bottom: 0.75rem;
`

const Link = styled.a`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #22d3ee;
  }
`

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`

const ContactText = styled.span`
  color: #9ca3af;
`

const BottomSection = styled.div`
  border-top: 1px solid #1f2937;
  margin-top: 3rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const LegalLink = styled.a`
  color: #9ca3af;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #22d3ee;
  }
`

export function Footer() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <FooterContainer>
            <Container>
                <Grid>
                    <LogoSection>
                        <Logo onClick={handleLogoClick}>
                            <TrueFocusLogo
                                sentence="ARTHUR GARCIA CRYPTO"
                                manualMode={false}
                                blurAmount={5}
                                borderColor="#0099ff"
                                animationDuration={2}
                                pauseBetweenAnimations={1}
                            />
                        </Logo>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Description>
                        <SocialLinks>
                            <SocialLink href="https://chat.whatsapp.com/BXgit8Sg7xQ6KMgIhZ0rSX" target="_blank" rel="noopener noreferrer">
                                <MessageCircleMore size={20} color="#3cff00df" />
                            </SocialLink>
                            <SocialLink href="https://x.com/arthurgarciak" target="_blank" rel="noopener noreferrer">
                                <Twitter size={20} color="#00a2ffdf" />
                            </SocialLink>
                            <SocialLink href="https://www.youtube.com/@arthurgarciacrypto" target="_blank" rel="noopener noreferrer">
                                <Youtube size={20} color="#ff0000df" />
                            </SocialLink>
                        </SocialLinks>
                    </LogoSection>

                    <Section>
                        <SectionTitle>Links Rápidos</SectionTitle>
                        <LinkList>
                            <LinkItem>
                                <Link href="#home">Início</Link>
                            </LinkItem>
                            <LinkItem>
                                <Link href="#about">Sobre</Link>
                            </LinkItem>
                            <LinkItem>
                                <Link href="#features">Recursos</Link>
                            </LinkItem>
                            <LinkItem>
                                <Link href="#pricing">Preços</Link>
                            </LinkItem>
                        </LinkList>
                    </Section>

                    <Section>
                        <SectionTitle>Contato</SectionTitle>
                        <LinkList>
                            <ContactItem>
                                <Mail size={20} color="#22d3ee" />
                                <ContactText>arthurgarciacrypto@contato.com</ContactText>
                            </ContactItem>
                            <ContactItem>
                                <MapPin size={20} color="#22d3ee" />
                                <ContactText>São Paulo, Brasil</ContactText>
                            </ContactItem>
                        </LinkList>
                    </Section>
                </Grid>

                <BottomSection>
                    <Copyright>© {new Date().getFullYear()} Arthur Garcia Crypto. Todos os direitos reservados.</Copyright>
                    <LegalLinks>
                        <LegalLink href="#">Política de Privacidade</LegalLink>
                        <LegalLink href="#">Termos de Uso</LegalLink>
                    </LegalLinks>
                </BottomSection>
            </Container>
        </FooterContainer>
    )
}