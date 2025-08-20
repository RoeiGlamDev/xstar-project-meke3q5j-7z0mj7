'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Add any animations or interactions here
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#fff' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <mesh ref={modelRef}>
          {/* Replace with your 3D model */}
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FFC0CB" /> {/* Pink color for luxury feel */}
        </mesh>
      </Canvas>
    </div>
  );
};

export default InteractiveModel;