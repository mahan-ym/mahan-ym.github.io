import React from 'react';
import MahanObjCanvas from "../avatar/MahanObjCanvas.jsx";

function Me() {
    return (
        <div className={"relative w-screen h-screen overflow-hidden"}>
            <div className="flex flex-row w-full h-full">
                <div className="relative ml-4 xl:w-2/5 w-full h-full content-center">
                    <h1>Mahan Yarmohammad</h1>
                    <h2>AI Engineer</h2>
                </div>
                <div className="absolute xl:relative -z-10  xl:w-3/5 w-full h-full">
                    <MahanObjCanvas/>
                </div>
            </div>
        </div>
    );
}

export default Me;
