import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';

const BoxWithPhysics = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

const GroundPlane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas shadows style={{ background: 'black' }} camera={{ position: [0, 5, 10], fov: 60 }}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      {/* Directional light simulating sunlight */}
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />

      {/* Interactive controls for zooming and rotating */}
      <OrbitControls />

      {/* Physics-enabled scene */}
      <Physics>
        <BoxWithPhysics />
        <GroundPlane />
      </Physics>
    </Canvas>
  );
};

export default Scene;