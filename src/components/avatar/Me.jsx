import React, { lazy, Suspense } from 'react';
import AboutMe from "../aboutme/AboutMe.jsx";

// Lazy load the 3D canvas component
const MahanObjCanvas = lazy(() => import("../avatar/MahanObjCanvas.jsx"));

function Me() {
    return (
        <div className={"relative w-screen overflow-hidden"}>
            <div className="flex flex-row w-full h-full">
                <div className="relative ml-5 xl:w-2/5 lg:mt-20 w-full h-full content-center">
                    <AboutMe />
                </div>
                <div className="absolute xl:relative -z-10  xl:w-3/5 w-full h-screen">
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading MAHAN ...</div>}>
                        <MahanObjCanvas />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Me;
