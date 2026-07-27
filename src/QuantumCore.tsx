import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Orbit({
  radius,
  rotation,
  speed,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
}) {
  const orbitRef = useRef<THREE.Group>(null!);
  const particleRef = useRef<THREE.Mesh>(null!);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;

      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.45,
          0
        )
      );
    }

    return pts;
  }, [radius]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed;

    particleRef.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * 0.45,
      0
    );
  });

  return (
    <group ref={orbitRef} rotation={rotation}>
      <Line points={points} color="white" />

      <mesh ref={particleRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
}

export default function QuantumCore() {
  const group = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.15;
  });

  return (
    <>
      <ambientLight intensity={0.3} />

      <pointLight intensity={10} color="white" />

      <group ref={group}>
        {/* Center Glow */}
        <mesh>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Wireframe Core */}
        <mesh>
          <sphereGeometry args={[0.9, 24, 24]} />
          <meshBasicMaterial wireframe color="white" />
        </mesh>

        {/* Orbits */}
        <Orbit radius={2} rotation={[0, 0, 0]} speed={1} />

        <Orbit radius={2} rotation={[Math.PI / 2, 0, 0]} speed={0.8} />

        <Orbit radius={2} rotation={[0, Math.PI / 2, 0]} speed={1.2} />

        <Orbit
          radius={2}
          rotation={[Math.PI / 4, Math.PI / 4, 0]}
          speed={0.9}
        />

        <Orbit
          radius={2}
          rotation={[-Math.PI / 4, Math.PI / 3, 0]}
          speed={1.1}
        />
      </group>

      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0} />
      </EffectComposer>
    </>
  );
}
