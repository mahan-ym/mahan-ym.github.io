import React, {useMemo} from 'react';
import {Canvas, useLoader, useThree} from "@react-three/fiber";
import {TextureLoader} from "three";

function RoomCover() {
    const texture = useLoader(TextureLoader, "/images/background.jpg");
    const { viewport, size } = useThree()

    const aspectRatio = useMemo(() => {
        return texture.image ? texture.image.width / texture.image.height : 1;
    }, [texture]);

    const width = 0.009* size.width;
    const height =width / aspectRatio;
    return (
            <mesh scale={[width, height, 0]} rotation={[0 ,- Math.PI/10, 0]} position={[0,0,0]}>
                <planeGeometry />
                <meshBasicMaterial map={texture} />
            </mesh>
    );
}

export default function RoomCoverCanvas() {
    return (
        <Canvas>
            <RoomCover />
        </Canvas>
    );
};