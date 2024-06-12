import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF, useFBX } from '@react-three/drei';
import background from '../public/images/background.jpg';
import avatarModel from '../public/model/avatar.glb';
'framer-motion';


function Avatar() {
  const { scene } = useGLTF(avatarModel);
  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
}

const Home = () => {
  return (
    <div className="homepage">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default Home;
