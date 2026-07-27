import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Torus() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.35;
  });

  return (
    <mesh ref={mesh} scale={0.6}>
      <torusGeometry args={[2.2, 0.7, 48, 220]} />
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
}

function Stars() {
  const positions = useMemo(() => {
    const p = [];

    for (let i = 0; i < 500; i++) {
      p.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }

    return new Float32Array(p);
  }, []);

  return (
    <Points positions={positions}>
      <PointMaterial
        transparent
        color="white"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function TorusRing() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <ambientLight intensity={2} />

        <Stars />

        <Torus />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          color: "#fff",
          fontFamily: "sans-serif",
          letterSpacing: "2px",
        }}
      >
        <p style={{ opacity: 0.5, margin: 0 }}>02</p>
        <h2 style={{ marginTop: 8 }}>TORUS RING</h2>
      </div>
    </div>
  );
}
