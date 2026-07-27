import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sparkles, Grid } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

export default function EnergyCube() {
  const group = useRef<THREE.Group>(null!);
  const core = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }, delta) => {
    group.current.rotation.y += delta * 0.2;

    const pulse = 1 + Math.sin(clock.elapsedTime * 3) * 0.15;

    core.current.scale.setScalar(pulse);
  });

  return (
    <>
      {/* Particles */}
      <Sparkles count={300} scale={10} size={1} />

      {/* Cube */}
      <group ref={group}>
        {/* Inner Cube */}
        <mesh scale={0.55}>
          <boxGeometry args={[3, 3, 3]} />
          <meshBasicMaterial
            wireframe
            transparent
            opacity={0.25}
            color="white"
          />
        </mesh>

        {/* Energy Core */}
        <mesh ref={core}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Vertical Lines */}
      </group>

      {/* Glow */}
      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0} />
      </EffectComposer>
    </>
  );
}
