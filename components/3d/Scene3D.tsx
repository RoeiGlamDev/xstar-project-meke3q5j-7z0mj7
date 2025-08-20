import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'white' }}> {/* Canvas background color */}
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} /> {/* Point light for highlights */}
      <OrbitControls /> {/* Allow user to orbit around the scene */}
      {/* Add 3D models or elements here */}
    </Canvas>
  );
};

export default Scene3D;