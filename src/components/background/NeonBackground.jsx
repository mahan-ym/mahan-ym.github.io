import React, { useRef } from 'react';
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {WaveMaterial} from "./BackgroundShader.js";

function NeonBackground({concentration ,...props}) {
    const ref = useRef()
    const { viewport, size } = useThree()
    useFrame((state, delta) => {
        ref.current.time += delta
    })
    return (
        <mesh {...props}>
            <planeGeometry />
            <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} concentration={concentration} />
        </mesh>
    )
}

export default function NeonBackgroundStripe({scrollPosition}) {
    return (
        <Canvas style={{position: "fixed", zIndex: -100 , opacity: 0.7}}>
            <NeonBackground concentration={3 - scrollPosition * 0.0005} scale={[100, 10, 1]} position={[-12, 0, -1]} />
        </Canvas>
    )
};