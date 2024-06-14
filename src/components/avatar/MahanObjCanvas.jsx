import React from "react";
import MahanObj from "./MahanObj.jsx";
import {Canvas} from "@react-three/fiber";

function MahanObjCanvas() {
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <MahanObj />
        </Canvas>
    );
}

export default MahanObjCanvas;