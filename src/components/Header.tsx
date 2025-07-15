import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Menu, MessageCircleMore, Twitter, X, Youtube } from "lucide-react"
import TrueFocusLogo from "./Layout/TrueFocusLogo"
import { useLocation, useNavigate } from "react-router-dom"

const HeaderContainer = styled.header<{ $isScrolled: boolean; $isHome: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;

  ${(props) => props.$isHome && `
    background: ${props.$isScrolled ? 'rgba(9, 11, 14, 0.95)' : 'transparent'};
    backdrop-filter: blur(10px);
  `}

  ${(props) => !props.$isHome && `
    background: ${props.$isScrolled ? 'rgba(9, 11, 14, 0.849)' : 'transparent'};
    backdrop-filter: blur(10px);
  `}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavButton = styled.button`
  background: none;
  border: none;
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: #22d3ee;
  }
`

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid #374151;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`

const MobileNavButton = styled.button`
  background: none;
  border: none;
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: #22d3ee;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled.a`
  display: flex;
  background: #66666639;
  border-radius: 50%;
  padding: 0.3rem;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  & > svg {
    display: inline-block;
    vertical-align: middle;
  }

  &:hover {
    background: #22d3ee58;
    transform: translateY(-2px);
  }
`

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const isCoursePage = location.pathname === '/curso';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (isHomePage) {
        setIsScrolled(scrollY > 100);
      } else {
        setIsScrolled(scrollY > 50);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  }

  const handleContact = () => {
    if (location.pathname === '/') {
      scrollToSection("contact");
    } else {
      navigate('/#contact');
    }
    setIsMenuOpen(false);
  }

  return (
    <HeaderContainer ref={headerRef} $isScrolled={isScrolled} $isHome={isHomePage}>
      <Container>
        <Nav>
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

          <DesktopNav>
            {isCoursePage ? (
              <>
                <NavButton onClick={() => handleNavigation('/')}>Início</NavButton>
                <NavButton onClick={() => scrollToSection("about")}>Sobre</NavButton>
                <NavButton onClick={() => scrollToSection("features")}>Recursos</NavButton>
                <NavButton onClick={() => scrollToSection("pricing")}>Preços</NavButton>
                <NavButton onClick={() => scrollToSection("testimonials")}>Depoimentos</NavButton>
                <SocialLinks>
                  <SocialLink href="https://chat.whatsapp.com/BXgit8Sg7xQ6KMgIhZ0rSX" target="_blank" rel="noopener noreferrer">
                    <MessageCircleMore size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://x.com/arthurgarciak" target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://www.youtube.com/@arthurgarciacrypto" target="_blank" rel="noopener noreferrer">
                    <Youtube size={20} color="#bebebe" />
                  </SocialLink>
                </SocialLinks>
              </>
            ) : (
              <>
                <NavButton onClick={() => handleNavigation('/')}>Início</NavButton>
                <NavButton onClick={() => handleNavigation('/curso')}>Curso</NavButton>
                <NavButton onClick={handleContact}>Contato</NavButton>
                <SocialLinks>
                  <SocialLink href="https://chat.whatsapp.com/BXgit8Sg7xQ6KMgIhZ0rSX" target="_blank" rel="noopener noreferrer">
                    <MessageCircleMore size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://x.com/arthurgarciak" target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://www.youtube.com/@arthurgarciacrypto" target="_blank" rel="noopener noreferrer">
                    <Youtube size={20} color="#bebebe" />
                  </SocialLink>
                </SocialLinks>
              </>
            )}
          </DesktopNav>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </Nav>

        <MobileNav $isOpen={isMenuOpen}>
          <MobileNavList>
            {isCoursePage ? (
              <>
                <MobileNavButton onClick={() => scrollToSection("home")}>Início</MobileNavButton>
                <MobileNavButton onClick={() => scrollToSection("about")}>Sobre</MobileNavButton>
                <MobileNavButton onClick={() => scrollToSection("features")}>Recursos</MobileNavButton>
                <MobileNavButton onClick={() => scrollToSection("pricing")}>Preços</MobileNavButton>
                <MobileNavButton onClick={() => scrollToSection("testimonials")}>Depoimentos</MobileNavButton>
                <SocialLinks>
                  <SocialLink href="https://chat.whatsapp.com/BXgit8Sg7xQ6KMgIhZ0rSX" target="_blank" rel="noopener noreferrer">
                    <MessageCircleMore size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://x.com/arthurgarciak" target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://www.youtube.com/@arthurgarciacrypto" target="_blank" rel="noopener noreferrer">
                    <Youtube size={20} color="#bebebe" />
                  </SocialLink>
                </SocialLinks>
              </>
            ) : (
              <>
                <MobileNavButton onClick={() => handleNavigation('/')}>Início</MobileNavButton>
                <MobileNavButton onClick={() => handleNavigation('/curso')}>Curso</MobileNavButton>
                <MobileNavButton onClick={handleContact}>Contato</MobileNavButton>
                <SocialLinks>
                  <SocialLink href="https://chat.whatsapp.com/BXgit8Sg7xQ6KMgIhZ0rSX" target="_blank" rel="noopener noreferrer">
                    <MessageCircleMore size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://x.com/arthurgarciak" target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} color="#bebebe" />
                  </SocialLink>
                  <SocialLink href="https://www.youtube.com/@arthurgarciacrypto" target="_blank" rel="noopener noreferrer">
                    <Youtube size={20} color="#bebebe" />
                  </SocialLink>
                </SocialLinks>
              </>
            )}
          </MobileNavList>
        </MobileNav>
      </Container>
    </HeaderContainer>
  )
}