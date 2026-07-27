import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function WaveSurface() {
  const mesh = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(12, 8, 120, 80);
  }, []);

  useFrame(({ clock }) => {
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const z =
        Math.sin(x * 1.2 + clock.elapsedTime * 1.4) * 0.6 +
        Math.cos(y * 1.5 + clock.elapsedTime * 1.2) * 0.45;

      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh.current.rotation.x = -Math.PI / 2.8;
  });

  return (
    <>
      <ambientLight intensity={0.35} />

      <pointLight position={[0, 5, 5]} intensity={5} />

      <Sparkles count={250} scale={10} size={2} />

      <mesh ref={mesh} geometry={geometry}>
        <meshBasicMaterial wireframe color="white" />
      </mesh>

      <EffectComposer>
        <Bloom intensity={1.8} luminanceThreshold={0} />
      </EffectComposer>
    </>
  );
}
