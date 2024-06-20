import React from 'react';
import MahanObjCanvas from "../avatar/MahanObjCanvas.jsx";

function Me() {
    return (
        <div className={"relative w-screen h-screen overflow-hidden"}>
            <div className="relative flex flex-rowitems-center w-full h-full">
                <div className="relative ml-4 xl:w-2/5 w-full h-full content-center">
                    <h1 className="text-4xl md:text-8xl font-tiny font-bold text-white w-full m-4">Mahan Y.T</h1>
                    <h2 className="text-2xl md:text-4xl font-tiny font-bold text-white w-full m-4">Software Engineer</h2>
                </div>
                <div className="absolute xl:relative -z-10  xl:w-3/5 w-full h-full">
                    <MahanObjCanvas/>
                </div>
            </div>
        </div>
    );
}

export default Me;
