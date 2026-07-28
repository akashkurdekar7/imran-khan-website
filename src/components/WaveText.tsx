import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface WaveTextProps {
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
}

const WaveText = ({
  text,
  className = "",
  duration = 0.6,
  stagger = 0.04,
}: WaveTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".bottom .char", {
        yPercent: 100,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  const isHovered = useRef(false);

  const animate = () => {
    if (isHovered.current) return;
    isHovered.current = true;

    const topChars = containerRef.current!.querySelectorAll(".top .char");
    const bottomChars = containerRef.current!.querySelectorAll(".bottom .char");

    gsap.killTweensOf([...topChars, ...bottomChars]);

    gsap.set(topChars, { yPercent: 0 });
    gsap.set(bottomChars, { yPercent: 100 });

    gsap
      .timeline({
        defaults: {
          duration: 0.7,
          ease: "expo.out",
          overwrite: "auto",
        },
        onComplete: () => {
          isHovered.current = false;
        },
      })
      .to(
        topChars,
        {
          yPercent: -100,
          stagger: 0.03,
        },
        0
      )
      .to(
        bottomChars,
        {
          yPercent: 0,
          stagger: 0.03,
        },
        0
      );
  };
  const renderText = () =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      onPointerEnter={animate}
      className="relative inline-block overflow-hidden cursor-pointer"
    >
      <div className="top flex pointer-events-none">{renderText()}</div>

      <div className="bottom absolute inset-0 flex pointer-events-none">
        {renderText()}
      </div>
    </div>
  );
};

export default WaveText;
