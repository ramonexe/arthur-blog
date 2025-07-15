import { useState, useEffect } from "react"
import styled from "styled-components"
import { ArrowUp } from "lucide-react"
import { useLocation } from "react-router-dom"

const ScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to right, #06b6d4, #3b82f6);
  color: white;
  border: none;
  border-radius: 50%;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.25);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 50;

  &:hover {
    background: linear-gradient(to right, #0891b2, #2563eb);
    transform: scale(1.1);
  }
`

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <ScrollButton $isVisible={isVisible} onClick={scrollToTop}>
      <ArrowUp size={24} />
    </ScrollButton>
  )
}