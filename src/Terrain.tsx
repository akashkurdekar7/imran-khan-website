import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

export default function Terrain() {
  const mesh = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 120, 120);

    const noise = createNoise2D();

    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const h = noise(x * 0.25, y * 0.25) * 2.5 + noise(x * 0.08, y * 0.08) * 5;

      pos.setZ(i, h);
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();

    return geo;
  }, []);

  useFrame(({ clock }) => {
    mesh.current.rotation.z = Math.sin(clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      rotation={[-Math.PI / 2.5, 0, 0]}
      scale={0.6}
    >
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
}
