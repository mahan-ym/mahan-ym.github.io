import React from "react";
import MahanObj from "./MahanObj.jsx";
import {Canvas} from "@react-three/fiber";

function MahanObjCanvas() {
    return (
        <Canvas>
            <hemisphereLight color={"#ffffff"} groundColor={"#000000"} intensity={1} position={ [0, 1, 0] } />
            <pointLight color={"#F77FBE"} intensity={3} position={ [1, 2, 1] } />
            <pointLight color={"#57C5C6"} intensity={4} position={ [-2, 2, 1] } />
            <MahanObj />
        </Canvas>
    );
}

export default MahanObjCanvas;