import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface WaveTextProps {
  text: string;
  className?: string;
  link?: string;
  target?: "_self" | "_blank";
}

const WaveText = ({
  text,
  className = "",
  link,
  target = "_self",
}: WaveTextProps) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const isHovered = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".bottom .char", {
        yPercent: 100,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const animate = () => {
    if (isHovered.current) return;
    isHovered.current = true;

    const topChars = containerRef.current?.querySelectorAll(".top .char");
    const bottomChars = containerRef.current?.querySelectorAll(".bottom .char");

    if (!topChars || !bottomChars) return;

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
    <a
      ref={containerRef}
      href={link}
      target={link ? target : undefined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onPointerEnter={animate}
      className="relative inline-block overflow-hidden cursor-pointer no-underline"
    >
      <div className={`top flex pointer-events-none ${className}`}>
        {renderText()}
      </div>

      <div
        className={`bottom absolute inset-0 flex pointer-events-none ${className}`}
      >
        {renderText()}
      </div>
    </a>
  );
};

export default WaveText;
