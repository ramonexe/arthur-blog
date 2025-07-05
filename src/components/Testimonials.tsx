import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Star, Quote } from "lucide-react"

const TestimonialsSection = styled.section`
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
  max-width: 72rem;
  margin: 0 auto;

  @media (min-width: 768px) {
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
  animation-delay: ${(props) => props.$index * 200}ms;

  &:hover {
    border-color: rgba(6, 182, 212, 0.5);
    transform: translateY(-4px);
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`

const UserDetails = styled.div``

const UserName = styled.h4`
  color: white;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
`

const UserRole = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const TestimonialText = styled.div`
  position: relative;
`

const QuoteIcon = styled.div`
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
`

const Text = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  padding-left: 1.5rem;
  margin: 0;
`

export function Testimonials() {
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

  const testimonials = [
    {
      name: "João Silva",
      role: "Streamer",
      image: "https://placehold.co/80x80",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      name: "Maria Santos",
      role: "Investidora",
      image: "https://placehold.co/80x80",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      name: "Pedro Costa",
      role: "Desenvolvedor NFT",
      image: "https://placehold.co/80x80",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ]

  return (
    <TestimonialsSection id="testimonials" ref={sectionRef}>
      <Container>
        <Content $isVisible={isVisible}>
          <Header>
            <Title>
              O que nossos
              <GradientText> alunos dizem</GradientText>
            </Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Subtitle>
          </Header>

          <Grid>
            {testimonials.map((testimonial, index) => (
              <Card key={index} $index={index} $isVisible={isVisible}>
                <UserInfo>
                  <Avatar src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <UserDetails>
                    <UserName>{testimonial.name}</UserName>
                    <UserRole>{testimonial.role}</UserRole>
                  </UserDetails>
                </UserInfo>

                <Rating>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </Rating>

                <TestimonialText>
                  <QuoteIcon>
                    <Quote size={32} color="rgba(6, 182, 212, 0.3)" />
                  </QuoteIcon>
                  <Text>{testimonial.text}</Text>
                </TestimonialText>
              </Card>
            ))}
          </Grid>
        </Content>
      </Container>
    </TestimonialsSection>
  )
}