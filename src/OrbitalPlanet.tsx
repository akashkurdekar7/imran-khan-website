import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

function Orbit({
  radius,
  rotation,
  speed,
  planetSize,
}: {
  radius: number;
  rotation: [number, number, number];
  speed: number;
  planetSize: number;
}) {
  const planet = useRef<THREE.Mesh>(null!);

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i <= 256; i++) {
      const a = (i / 256) * Math.PI * 2;

      pts.push(
        new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * 0.55, 0)
      );
    }

    return pts;
  }, [radius]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed;

    planet.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * 0.55,
      0
    );
  });

  return (
    <group rotation={rotation}>
      <Line points={points} color="white" />

      <mesh ref={planet}>
        <sphereGeometry args={[planetSize, 24, 24]} />
        <meshStandardMaterial color="white" metalness={1} roughness={0.15} />
      </mesh>
    </group>
  );
}

export default function OrbitalPlanet() {
  const group = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.15;
  });

  return (
    <>
      <pointLight position={[2, 3, 2]} intensity={8} />

      <Sparkles count={220} scale={9} size={2} />

      <group ref={group}>
        {/* Planet */}
        <mesh>
          <sphereGeometry args={[1.4, 48, 48]} />
          <meshBasicMaterial wireframe color="white" />
        </mesh>

        {/* Orbits */}
        <Orbit
          radius={2.2}
          rotation={[0.3, 0.5, 0]}
          speed={0.8}
          planetSize={0.12}
        />

        <Orbit
          radius={2.5}
          rotation={[-0.6, 0.2, 0.5]}
          speed={1.1}
          planetSize={0.15}
        />

        <Orbit
          radius={2.8}
          rotation={[0.8, -0.4, 0.2]}
          speed={0.65}
          planetSize={0.13}
        />

        <Orbit
          radius={3.1}
          rotation={[-0.3, 1.1, -0.4]}
          speed={0.95}
          planetSize={0.17}
        />
      </group>

      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0} />
      </EffectComposer>
    </>
  );
}
