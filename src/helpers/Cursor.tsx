import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formatCursorText = (text: string) => {
    if (text.length <= 14) return text;

    const words = text.split(" ");
    const mid = Math.ceil(words.length / 2);

    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")].join(
      "<br/>"
    );
  };
  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canHover || !cursorRef.current || !textRef.current) return;

    const cursor = cursorRef.current;
    const text = textRef.current;
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    const enter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;

      text.innerHTML = formatCursorText(target.dataset.cursor ?? "");

      gsap.to(cursor, {
        width: 90,
        height: 90,
        backgroundColor: "#fff",
        borderColor: "#fff",
        duration: 0.2,
      });

      gsap.to(text, {
        opacity: 1,
        color: "#000",
        duration: 0.15,
      });
    };

    const leave = () => {
      gsap.to(cursor, {
        width: 32,
        height: 32,
        backgroundColor: "transparent",
        borderColor: "rgba(0,0,0,0.3)",
        duration: 0.2,
      });

      gsap.to(text, {
        opacity: 0,
        duration: 0.1,
      });
    };

    const targets = document.querySelectorAll("[data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (
    typeof window !== "undefined" &&
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    return null;
  }

  const cursorBg = useRef({
    color: "#fff",
    lineColor: "rgba(0,0,0,.1)",
  });

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 backdrop-invert will-change-transform h-8 w-8"
    >
      <div
        ref={textRef}
        className="opacity-0 text-[8px] uppercase tracking-wider leading-tight text-center"
      />
    </div>
  );
};

export default Cursor;
