import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(1, 22, 26, 0.1), rgba(6, 12, 22, 0.1));
`;

const AnimatedBg1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 2.5rem;
  width: 5rem;
  height: 5rem;
  background: rgba(5, 69, 80, 0.2);
  border-radius: 50%;
  filter: blur(40px);
  animation: ${pulse} 2s infinite;

  @media (max-width: 768px) {
    top: 3rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
  }
`;

const AnimatedBg2 = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 2.5rem;
  width: 8rem;
  height: 8rem;
  background: rgba(25, 55, 104, 0.2);
  border-radius: 50%;
  filter: blur(40px);
  animation: ${pulse} 2s infinite;
  animation-delay: 1s;

  @media (max-width: 768px) {
    bottom: 3rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
  }
`;

const AnimatedBg3 = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 4rem;
  height: 4rem;
  background: rgba(47, 16, 75, 0.2);
  border-radius: 50%;
  filter: blur(40px);
  animation: ${pulse} 2s infinite;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    left: 15%;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

interface AnimatedBackgroundProps {
  variant?: 'default' | 'minimal' | 'intense';
  showOverlay?: boolean;
}

export default function AnimatedBackground({ 
  variant = 'default', 
  showOverlay = true 
}: AnimatedBackgroundProps) {
  return (
    <BackgroundContainer>
      {showOverlay && <BackgroundOverlay />}
      
      {variant === 'default' && (
        <>
          <AnimatedBg1 />
          <AnimatedBg2 />
          <AnimatedBg3 />
        </>
      )}
      
      {variant === 'minimal' && (
        <>
          <AnimatedBg1 style={{ opacity: 0.5 }} />
          <AnimatedBg2 style={{ opacity: 0.5 }} />
        </>
      )}
      
      {variant === 'intense' && (
        <>
          <AnimatedBg1 />
          <AnimatedBg2 />
          <AnimatedBg3 />
          <AnimatedBg1 style={{ 
            top: '20%', 
            right: '10%', 
            left: 'auto',
            background: 'rgba(80, 200, 120, 0.15)',
            animationDelay: '1.5s'
          }} />
          <AnimatedBg3 style={{ 
            bottom: '20%', 
            right: '30%', 
            top: 'auto',
            left: 'auto',
            background: 'rgba(200, 80, 120, 0.15)',
            animationDelay: '2s'
          }} />
        </>
      )}
    </BackgroundContainer>
  );
}
