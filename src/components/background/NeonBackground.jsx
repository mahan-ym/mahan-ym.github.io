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
        <Canvas style={{position: "fixed", zIndex: -100}}>
            <NeonBackground concentration={4} scale={[100, 6.5 + scrollPosition * 0.0001, 1]} rotation={[0, 0, Math.PI / 4]} position={[-12+ scrollPosition * 0.0005, -scrollPosition * 0.005, -1]} />
            <NeonBackground concentration={4} scale={[100, 6.5 + scrollPosition * 0.0001, 1]} rotation={[0, 0, -Math.PI / 4]} position={[12- scrollPosition * 0.0005, -scrollPosition * 0.005, -1]} />
        </Canvas>
    )
};