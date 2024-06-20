import {useAnimations, useFBX, useGLTF} from "@react-three/drei";
import avatarModel from "../../public/model/avatar.glb";
import React, {useEffect} from "react";

function MahanObj() {
    const { scene } = useGLTF(avatarModel);
    const {animations} = useFBX('src/public/animations/greeting.fbx');
    animations[0].name = 'greeting';
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        actions?.greeting.play();
    }, [actions]);

    return <primitive object={scene} scale={4.5} position={[0.5, -6, 0]} />;
}

export default MahanObj;