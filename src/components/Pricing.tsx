import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Check, Zap } from "lucide-react"

const PricingSection = styled.section`
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 40rem;
  margin: 0 auto;
`

const Card = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(12px);
  border: 2px solid #00c3ff;
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s ease;
  cursor: pointer;
  box-shadow: 0 25px 50px rgba(6, 182, 212, 0.3);
  animation: ${(props) => (props.$isVisible ? "fadeInUp 0.8s ease-out forwards" : "none")};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: #22d3ee;
    box-shadow: 0 35px 70px rgba(6, 182, 212, 0.4);
  }

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
  }
`

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`

const PlanName = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    font-size: 1.75rem;
  }
`

const PlanDescription = styled.p`
  color: #9ca3af;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.5;
`

const PriceContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const Price = styled.span`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(to right, #00c3ff, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 640px) {
    font-size: 2.75rem;
  }
`

const OriginalPrice = styled.span`
  color: #6b7280;
  text-decoration: line-through;
  font-size: 1.25rem;
  font-weight: 500;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 3rem 0;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding: 0.5rem 0;
`

const CheckIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, #00c3ff, #22d3ee);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.125rem;
  box-shadow: 0 4px 8px rgba(6, 182, 212, 0.3);
`

const FeatureText = styled.span`
  color: #e5e7eb;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
`

const PlanButton = styled.button`
  width: 100%;
  padding: 1.25rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #00c3ff, #22d3ee);
  color: white;
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.35);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #0891b2, #06b6d4);
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(6, 182, 212, 0.45);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`

const Footer = styled.div`
  text-align: center;
  margin-top: 3rem;
`

const SecurityText = styled.p`
  color: #9ca3af;
  margin-bottom: 1rem;
`

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`

export function Pricing() {
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

  const plan = {
    name: "Curso Completo",
    price: "R$ 497",
    originalPrice: "R$ 997",
    description: "Tudo que você precisa para dominar o mundo das criptomoedas",
    features: [
      "Acesso vitalício ao curso completo",
      "Mais de 50 aulas em vídeo",
      "Material didático exclusivo",
      "Comunidade privada no Telegram e Whatsapp",
      "Análises técnicas semanais",
      "Suporte direto com o Arthur"
    ]
  }

  return (
    <PricingSection id="pricing" ref={sectionRef}>
      <Container>
        <Content $isVisible={isVisible}>
          <Header>
            <Title>
              Investimento no seu
              <GradientText> futuro</GradientText>
            </Title>
            <Subtitle>
              Uma oportunidade única de transformar sua vida financeira com conhecimento sólido e estratégias comprovadas no mercado de criptomoedas.
            </Subtitle>
          </Header>

          <CardContainer>
            <Card $isVisible={isVisible}>
              <CardHeader>
                <PlanName>{plan.name}</PlanName>
                <PlanDescription>{plan.description}</PlanDescription>
                <PriceContainer>
                  <Price>{plan.price}</Price>
                  <OriginalPrice>{plan.originalPrice}</OriginalPrice>
                </PriceContainer>
              </CardHeader>

              <FeatureList>
                {plan.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <CheckIcon>
                      <Check size={14} color="white" />
                    </CheckIcon>
                    <FeatureText>{feature}</FeatureText>
                  </FeatureItem>
                ))}
              </FeatureList>

              <PlanButton>
                <Zap size={22} />
                Garantir Minha Vaga
              </PlanButton>
            </Card>
          </CardContainer>

          <Footer>
            <SecurityText>🔒 Pagamento 100% seguro • Garantia incondicional de 30 dias</SecurityText>
            <PaymentMethods>
              <span>Cartão de Crédito</span>
              <span>•</span>
              <span>PIX</span>
              <span>•</span>
              <span>Boleto Bancário</span>
              <span>•</span>
              <span>Parcelamento em até 12x</span>
            </PaymentMethods>
          </Footer>
        </Content>
      </Container>
    </PricingSection>
  )
}