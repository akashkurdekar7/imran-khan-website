import { Children, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  coverColor?: string;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  stagger?: number;
  containerAnimation?: gsap.core.Tween;
};

const TextReveal = ({
  children,
  className = "",
  coverColor = "#F26B4F",
  start = "top 80%",
  end = "+=120",
  scrub = 0.8,
  stagger = 0.08,
  containerAnimation,
}: TextRevealProps) => {
  const frameRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!frameRef.current) return;

    const ctx = gsap.context(() => {
      const texts = frameRef.current!.querySelectorAll(".reveal-text");
      const covers = frameRef.current!.querySelectorAll(".reveal-cover");

      // Initial state
      gsap.set(texts, {
        opacity: 0,
        y: 10,
        filter: "blur(8px)",
      });

      gsap.set(covers, {
        xPercent: -110,
        skewX: -10,
        scaleX: 1.15,
        transformOrigin: "left center",
      });

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: frameRef.current,
          containerAnimation,
          start,
          end,
          scrub,
        },
      });

      tl.to(
        covers,
        {
          xPercent: 110,
          skewX: 0,
          scaleX: 1,
          ease: "expo.inOut",
          stagger,
        },
        0
      ).to(
        texts,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          stagger,
        },
        0.08
      );
    }, frameRef);

    return () => ctx.revert();
  }, [containerAnimation, start, end, scrub, stagger]);

  return (
    <div ref={frameRef} className={className}>
      {Children.map(children, (child, index) => (
        <div key={index} className="relative overflow-hidden w-fit">
          {/* Text */}
          <span className="reveal-text relative z-10 block">{child}</span>

          {/* Swipe */}
          <span
            className="reveal-cover absolute inset-0 z-20 pointer-events-none"
            style={{
              background: coverColor,
              boxShadow:
                "0 8px 24px rgba(0,0,0,.18), inset 0 0 12px rgba(255,255,255,.12)",
              filter: "blur(.4px)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
