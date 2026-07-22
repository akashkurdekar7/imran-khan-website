import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let x = mouseX;
    let y = mouseY;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      x += (mouseX - x) * 0.15;
      y += (mouseY - y) * 0.15;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-black/30 backdrop-invert"
    />
  );
};

export default Cursor;