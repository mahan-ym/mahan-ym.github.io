import React, { lazy, Suspense, useState, useEffect } from 'react';
import AboutMe from "../aboutme/AboutMe.jsx";

// Lazy load the 3D canvas component
const MahanObjCanvas = lazy(() => import("../avatar/MahanObjCanvas.jsx"));

function Me() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className={"relative w-full overflow-hidden"}>
            <div className="flex flex-row w-full h-full">
                <div className="relative m-5 md:ml-5 xl:w-2/5 lg:mt-20 w-full h-full content-center">
                    <AboutMe />
                </div>
                {isLargeScreen && (
                    <div className="xl:relative -z-10 xl:w-3/5 w-full h-screen">
                        <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading MAHAN ...</div>}>
                            <MahanObjCanvas />
                        </Suspense>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Me;
