import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Shield, Target, Users, Award } from "lucide-react"

const AboutSection = styled.section`
  padding: 5rem 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Content = styled.div<{ $isVisible: boolean }>`
  transition: all 1s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? "0" : "2.5rem")});
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const GradientText = styled.span`
  background: linear-gradient(to right, #00c3ff, #1e5de6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Card = styled.div`
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid #374151;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(6, 182, 212, 0.5);
    transform: translateY(-4px);
  }
`

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #00c3ff, #123788);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
`

const CardText = styled.p`
  color: #9ca3af;
  line-height: 1.6;
`

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: Award,
      title: "Certificação",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ]

  return (
    <AboutSection id="about" ref={sectionRef}>
      <Container>
        <Content $isVisible={isVisible}>
          <Header>
            <Title>
              Por que escolher nosso
              <GradientText> curso?</GradientText>
            </Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Subtitle>
          </Header>

          <Grid>
            {features.map((feature, index) => (
              <Card key={index}>
                <IconContainer>
                  <feature.icon size={24} color="white" />
                </IconContainer>
                <CardTitle>{feature.title}</CardTitle>
                <CardText>{feature.description}</CardText>
              </Card>
            ))}
          </Grid>
        </Content>
      </Container>
    </AboutSection>
  )
}