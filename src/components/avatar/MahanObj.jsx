import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

function MahanObj() {
    const { scene } = useGLTF("/model/avatar.glb");
    const { animations } = useFBX('/animations/greeting.fbx');
    animations[0].name = 'greeting';
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        actions?.greeting.play();
    }, [actions]);

    return <primitive object={scene} scale={3.5} position={[0, -3.3, 0]} />;
}

export default MahanObj;