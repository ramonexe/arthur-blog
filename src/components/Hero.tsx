import { useEffect, useState } from "react"
import styled from "styled-components"
import { Play, ArrowRight, TrendingUp } from "lucide-react"
import AnimatedBackground from "./Layout/AnimatedBackground"

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgb(9, 11, 14) 0%, rgb(14, 21, 32) 50%, rgb(9, 11, 14) 100%);
  border-bottom: 4px solid;
  border-image: linear-gradient(90deg, #123788, #00c3ff, #123788) 1;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
  z-index: 10;
`

const Content = styled.div<{ $isVisible: boolean }>`
  transition: all 1s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isVisible ? "0" : "2.5rem")});
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(31, 41, 55, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`

const BadgeText = styled.span`
  font-size: 0.875rem;
  color: #d1d5db;
`

const Title = styled.h1`
  font-size: 5.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 9vw;
  }
`

const GradientText = styled.span`
  background: linear-gradient(to right, #22d3ee, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
`

const Subtitle = styled.p`
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`

const PrimaryButton = styled.button`
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.25);

  &:hover {
    background: linear-gradient(to right, #0891b2, #2563eb);
    transform: scale(1.05);
  }
`

const SecondaryButton = styled.button`
  border: 2px solid #4b5563;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: #06b6d4;
    background: rgba(6, 182, 212, 0.1);
  }
`

export function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <HeroSection id="home">
            <AnimatedBackground variant="default" showOverlay={true} />

            <Container>
                <Content $isVisible={isVisible}>
                    <Badge>
                        <TrendingUp size={16} color="#22d3ee" />
                        <BadgeText>Mercado em alta - Aprenda agora!</BadgeText>
                    </Badge>

                    <Title>
                        Domine o mundo das
                        <GradientText>Crypto & NFTs</GradientText>
                    </Title>

                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </Subtitle>

                    <ButtonGroup>
                        <PrimaryButton>
                            <span>Começar Agora</span>
                            <ArrowRight size={20} />
                        </PrimaryButton>

                        <SecondaryButton>
                            <Play size={20} />
                            <span>Assistir Demo</span>
                        </SecondaryButton>
                    </ButtonGroup>
                </Content>
            </Container>
        </HeroSection>
    )
}