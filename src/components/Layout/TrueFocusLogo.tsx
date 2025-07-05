import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./TrueFocusLogo.css";

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocusLogo: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef(
    []
  );
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  return (
    <div className="focus-container-logo" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              if (el) {
                wordRefs.current[index] = el;
              }
            }}
            className={`focus-word-logo ${manualMode ? "manual" : ""} ${
              isActive && !manualMode ? "active" : ""
            }`}
            style={
              {
                filter: manualMode
                  ? isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`
                  : isActive
                    ? `blur(0px)`
                    : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`,
                "--border-color": borderColor,
                "--glow-color": glowColor,
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame-logo"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration,
        }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
      >
        <span className="corner-logo top-left-logo"></span>
        <span className="corner-logo top-right-logo"></span>
        <span className="corner-logo bottom-left-logo"></span>
        <span className="corner-logo bottom-right-logo"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocusLogo;
