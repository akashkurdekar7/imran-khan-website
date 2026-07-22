import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import * as MarchingSquares from "marching-squares";
const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const noise = createNoise2D();

    let width = window.innerWidth;
    let height = window.innerHeight;
    const DPR = window.devicePixelRatio || 1;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * DPR;
      canvas.height = height * DPR;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    let animationId: number;
let last = 0;
    function draw(now: number) {
      if (now - last < 33) {
    animationId = requestAnimationFrame(draw);
    return;
  }

  last = now;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);

      const resolution = 7;

      const cols = Math.ceil(width / resolution) + 1;
      const rows = Math.ceil(height / resolution) + 1;

      const field: number[][] = [];

      for (let y = 0; y < rows; y++) {
        field[y] = [];

        for (let x = 0; x < cols; x++) {
        const nx = x * 0.0065;
const ny = y * 0.0065;

const warpX = noise(nx + time * 0.2, ny) * 1.8;
const warpY = noise(nx, ny + time * 0.2) * 1.8;

field[y][x] = noise(
  nx + warpX,
  ny + warpY
);
        }
      }

     ctx.strokeStyle = "rgba(0,0,0,.18)";
ctx.lineWidth = 1;
ctx.lineJoin = "round";
ctx.lineCap = "round";

const levels = [];

for (let i = -0.8; i <= 0.8; i += 0.65) {
  levels.push(i);
}

const contours = MarchingSquares.isoLines(field, levels);

contours.forEach((group: any) => {
  group.forEach((line: any) => {
    ctx.beginPath();

    line.forEach(([px, py]: number[], i: number) => {
      const X = px * resolution;
      const Y = py * resolution;

      if (i === 0) ctx.moveTo(X, Y);
      else ctx.lineTo(X, Y);
    });

    ctx.stroke();
  });
});

      time += 0.001;

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
};

export default Background;