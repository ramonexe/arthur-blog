import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Check, Star, Zap } from "lucide-react"

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div<{ $popular: boolean; $index: number; $isVisible: boolean }>`
  position: relative;
  background: rgba(17, 24, 39, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid ${(props) => (props.$popular ? "#00c3ff" : "#374151")};
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: ${(props) => (props.$popular ? "0 25px 50px rgba(6, 182, 212, 0.25)" : "none")};
  animation: ${(props) => (props.$isVisible ? "fadeInUp 0.6s ease-out forwards" : "none")};
  animation-delay: ${(props) => props.$index * 200}ms;

  &:hover {
    transform: scale(1.05);
    border-color: ${(props) => (props.$popular ? "#00c3ff" : "rgba(6, 182, 212, 0.5)")};
  }
`

const PopularBadge = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, #00c3ff, #123788);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`

const PlanDescription = styled.p`
  color: #9ca3af;
  margin-bottom: 1rem;
`

const PriceContainer = styled.div`
  margin-bottom: 1rem;
`

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
`

const OriginalPrice = styled.span`
  color: #9ca3af;
  text-decoration: line-through;
  margin-left: 0.5rem;
`

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const CheckIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background: linear-gradient(to right, #00c3ff, #123788);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const FeatureText = styled.span`
  color: #d1d5db;
`

const PlanButton = styled.button<{ $popular: boolean }>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${(props) =>
    props.$popular
      ? `
    background: linear-gradient(to right, #00c3ff, #123788);
    color: white;
    box-shadow: 0 10px 25px rgba(6, 182, 212, 0.25);

    &:hover {
      background: linear-gradient(to right, #0891b2, #2563eb);
    }
  `
      : `
    border: 2px solid #4b5563;
    color: white;
    background: none;

    &:hover {
      border-color: #00c3ff;
      background: rgba(6, 182, 212, 0.1);
    }
  `}
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

  const plans = [
    {
      name: "Básico",
      price: "R$ 297",
      originalPrice: "R$ 497",
      description: "Perfeito para iniciantes",
      features: [
        "Acesso ao curso completo",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "R$ 497",
      originalPrice: "R$ 797",
      description: "Mais popular entre os alunos",
      features: [
        "Tudo do plano Básico",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      popular: true,
    },
    {
      name: "VIP",
      price: "R$ 997",
      originalPrice: "R$ 1.497",
      description: "Para quem quer resultados máximos",
      features: [
        "Tudo do plano Premium",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      popular: false,
    },
  ]

  return (
    <PricingSection id="pricing" ref={sectionRef}>
      <Container>
        <Content $isVisible={isVisible}>
          <Header>
            <Title>
              Escolha seu
              <GradientText> plano</GradientText>
            </Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Subtitle>
          </Header>

          <Grid>
            {plans.map((plan, index) => (
              <Card key={index} $popular={plan.popular} $index={index} $isVisible={isVisible}>
                {plan.popular && (
                  <PopularBadge>
                    <Star size={16} />
                    <span>Mais Popular</span>
                  </PopularBadge>
                )}

                <CardHeader>
                  <PlanName>{plan.name}</PlanName>
                  <PlanDescription>{plan.description}</PlanDescription>
                  <PriceContainer>
                    <Price>{plan.price}</Price>
                    <OriginalPrice>{plan.originalPrice}</OriginalPrice>
                  </PriceContainer>
                </CardHeader>

                <FeatureList>
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckIcon>
                        <Check size={12} color="white" />
                      </CheckIcon>
                      <FeatureText>{feature}</FeatureText>
                    </FeatureItem>
                  ))}
                </FeatureList>

                <PlanButton $popular={plan.popular}>
                  {plan.popular && <Zap size={20} />}
                  Começar Agora
                </PlanButton>
              </Card>
            ))}
          </Grid>

          <Footer>
            <SecurityText>🔒 Pagamento 100% seguro • Garantia de 7 dias</SecurityText>
            <PaymentMethods>
              <span>Visa</span>
              <span>•</span>
              <span>Mastercard</span>
              <span>•</span>
              <span>PIX</span>
              <span>•</span>
              <span>Boleto</span>
            </PaymentMethods>
          </Footer>
        </Content>
      </Container>
    </PricingSection>
  )
}