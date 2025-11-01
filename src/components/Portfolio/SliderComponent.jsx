import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function SliderComponent({ imageSrc, onEnlargeClick }) {

    const handleImageEnlargeClick = (event) => {
        onEnlargeClick(imageSrc);
    }

    return (
        <div className="relative">
            <img src={imageSrc} alt="portfolio image" loading="lazy" />
            <button onClick={handleImageEnlargeClick}
                className="absolute bottom-0 right-0  bg-gray-800 text-white p-3">
                <FontAwesomeIcon icon={faExpand} beatFade /></button>
        </div>
    )
}

export default SliderComponent;