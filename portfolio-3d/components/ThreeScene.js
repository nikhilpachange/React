import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeScene = () => {
  return (
    <Canvas className="three-canvas">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      <Box position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
