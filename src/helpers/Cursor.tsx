// import { useEffect, useRef } from "react";

// const Cursor = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Don't enable on touch devices
//     const canHover = window.matchMedia(
//       "(hover: hover) and (pointer: fine)"
//     ).matches;

//     if (!canHover) return;

//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     let mouseX = window.innerWidth / 2;
//     let mouseY = window.innerHeight / 2;

//     let x = mouseX;
//     let y = mouseY;

//     let raf: number;

//     const move = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const animate = () => {
//       x += (mouseX - x) * 0.15;
//       y += (mouseY - y) * 0.15;

//       cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

//       raf = requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", move);
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", move);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   // Don't render on touch devices
//   if (
//     typeof window !== "undefined" &&
//     !window.matchMedia("(hover: hover) and (pointer: fine)").matches
//   ) {
//     return null;
//   }

//   return (
//     <div
//       ref={cursorRef}
//       className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-black/30 backdrop-invert"
//     />
//   );
// };

// export default Cursor;
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canHover || !cursorRef.current) return;

    const cursor = cursorRef.current;

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

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (
    typeof window !== "undefined" &&
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/30 backdrop-invert will-change-transform"
    />
  );
};

export default Cursor;
