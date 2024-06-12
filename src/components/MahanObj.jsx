import {useAnimations, useGLTF} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import mahanObj from "../assets/avatar.glb";

const MahanObj = ({scale, position}) => {
    const mahanref = useRef();
    const {scene, animations} = useGLTF(mahanObj);
    const { actions } = useAnimations(animations, mahanref);
    
    useEffect(() => {
        actions["Idle"].play();
    }, [actions]);

    return (
        <mesh
            ref={mahanref}
            scale={scale}
            position={position}
            rotation = {[0, 2.2, 0]}>
            <primitive object={scene} />
        </mesh>
    );

};

const MahanObjCanvas = ({scrollContainer}) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([2,2,2]);
    const [position, setPosition] = useState([0.2,-0.7,0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollContainer.current.scrollTop;
            const rotationXValue = scrollTop * -0.0006;
            const rotationYValue = scrollTop * -0.00075;
            setRotationX(rotationXValue);
            setRotationY(rotationYValue);
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale([1,1,1]);
                setPosition([0.2,-0.1,0]);
            } else if (window.innerWidth < 1024) {
                setScale([1.33,1.33,1.33]);
                setPosition([0.2,-0.3,0]);
            } else if (window.innerWidth < 1280) {
                setScale([1.5,1.5,1.5]);
                setPosition([0.2,-0.4,0]);
            } else if (window.innerWidth < 1536) {
                setScale([1.66,1.66,1.66]);
                setPosition([0.2,-0.5,0]);
            } else {
                setScale([2,2,2]);
                setPosition([0.2,-0.7,0]);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
        
    }, [scrollContainer]);

    return (
        <Canvas className={`w-full h-screen bg-transparent z-10`} 
        camera={{near: 0.1, far: 1000}}>
            <Suspense>
                <ambientLight intensity={0.5} />
                <directionalLight position={[1,1,1]} intensity={2} /> 
                <pointLight position={[-10, 5, 10]} intensity={2} />
                <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
                <hemisphereLight skyColor={"#ffffff"} groundColor={"#000000"} intensity={1} />
                <MahanObj 
                scale={scale} 
                position={position}
                rotationX={rotationX}
                rotationY={rotationY} />
            </Suspense>
        </Canvas>
    );
 }
export default MahanObjCanvas;