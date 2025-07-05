import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { BookOpen, Video, MessageCircle, Download, Smartphone, Globe } from "lucide-react"

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: #090D14;
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
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div<{ $index: number; $isVisible: boolean }>`
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid #374151;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${(props) => (props.$isVisible ? "fadeInUp 0.6s ease-out forwards" : "none")};
  animation-delay: ${(props) => props.$index * 100}ms;

  &:hover {
    border-color: rgba(6, 182, 212, 0.5);
    transform: translateY(-4px);
  }
`

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to right, #00c3ff, #123788);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`

const CardText = styled.p`
  color: #9ca3af;
  line-height: 1.6;
`

export function Features() {
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
      icon: BookOpen,
      title: "Conteúdo Completo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Video,
      title: "Aulas em Vídeo HD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: MessageCircle,
      title: "Suporte 24/7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Download,
      title: "Material Downloadável",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Smartphone,
      title: "Acesso Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: Globe,
      title: "Acesso Vitalício",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <FeaturesSection id="features" ref={sectionRef}>
      <Container>
        <Content $isVisible={isVisible}>
          <Header>
            <Title>
              Recursos
              <GradientText> Exclusivos</GradientText>
            </Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Subtitle>
          </Header>

          <Grid>
            {features.map((feature, index) => (
              <Card key={index} $index={index} $isVisible={isVisible}>
                <IconContainer>
                  <feature.icon size={32} color="white" />
                </IconContainer>
                <CardTitle>{feature.title}</CardTitle>
                <CardText>{feature.description}</CardText>
              </Card>
            ))}
          </Grid>
        </Content>
      </Container>
    </FeaturesSection>
  )
}