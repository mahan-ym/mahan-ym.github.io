import React from "react";
import MahanObj from "./MahanObj.jsx";
import {Canvas} from "@react-three/fiber";

function MahanObjCanvas() {
    return (
        <Canvas>
            <hemisphereLight color={"#ffffff"} groundColor={"#000000"} intensity={1} position={[0, 1, 0]}/>
            <pointLight color={"#F77FBE"} intensity={100} position={[2, -4, 1]}/>
            <pointLight color={"#57C5C6"} intensity={100} position={[-2, -4, 0]}/>
            <pointLight color={"#F77FBE"} intensity={30} position={[2, 4, 1]}/>
            <pointLight color={"#57C5C6"} intensity={30} position={[-2, 4, 0]}/>
            <MahanObj/>
        </Canvas>
    );
}

export default MahanObjCanvas;