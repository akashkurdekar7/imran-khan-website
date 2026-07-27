import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Ring({ radius, y }: { radius: number; y: number }) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;

      pts.push(
        new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      );
    }

    return pts;
  }, [radius, y]);

  return <Line points={points} color="white" lineWidth={1} />;
}

export default function HelicalSpiral() {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.25;
  });

  return (
    <>
      <ambientLight intensity={0.3} />

      <pointLight position={[0, 3, 0]} intensity={6} />

      <Sparkles count={250} scale={8} size={2} />

      <group ref={group}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Ring key={i} radius={2 - i * 0.3} y={2 - i * 1.1} />
        ))}
      </group>

      <EffectComposer>
        <Bloom intensity={1.8} luminanceThreshold={0} />
      </EffectComposer>
    </>
  );
}
