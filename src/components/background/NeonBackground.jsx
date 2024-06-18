import React, { useRef } from 'react';
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import { easing } from 'maath'
import {WaveMaterial} from "./BackgroundShader.js";

function NeonBackground() {
    const ref = useRef()
    const { viewport, size } = useThree()
    useFrame((state, delta) => {
        ref.current.time += delta
        easing.damp3(ref.current.pointer, state.pointer, 0.2, delta)
    })
    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry />
            <waveMaterial ref={ref} key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} />
        </mesh>
    )
}

export default function NeonBackgroundCanvas() {
    return (
        <Canvas style={{position: "absolute", zIndex: -1}}>
            <NeonBackground />
        </Canvas>
    )
};