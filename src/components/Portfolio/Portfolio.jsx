import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./SliderComponent.jsx";
import './Portfolio.css';

function Portfolio() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageEnlargeClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="portfolio ">
            <div className="portfolio-container">
                <h1>Gallery:</h1>
                <div
                    className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl
               max-w-[320px] md:max-w-[640px] lg:max-w-[800px] xl:max-w-[1024px] aspect-[4/3]">
                    <div className="rounded-xl overflow-hidden aspect-[4/3]">

                        <Slider {...settings} >
                            <SliderComponent imageSrc="/images/gallery/footballist1.jpg" onEnlargeClick={handleImageEnlargeClick} />
                            <SliderComponent imageSrc="/images/gallery/footballist2.jpg" onEnlargeClick={handleImageEnlargeClick} />
                            <SliderComponent imageSrc="/images/gallery/website.jpg" onEnlargeClick={handleImageEnlargeClick} />
                            <SliderComponent imageSrc="/images/gallery/pamaro1.jpg" onEnlargeClick={handleImageEnlargeClick} />
                            <SliderComponent imageSrc="/images/gallery/pamaro2.jpg" onEnlargeClick={handleImageEnlargeClick} />
                        </Slider>

                    </div>
                </div>
                <div
                    className="relative mx-auto bg-gray-700 rounded-b-xl
                items-center content-center justify-center flex
                h-[24px] md:h-[44px] lg:h-[64px] xl:h-[84px] max-w-[320px] md:max-w-[640px] lg:max-w-[800px] xl:max-w-[1024px]">
                    <svg className="h-[24px] md:h-[44px] lg:h-[64px] xl:h-[84px]" viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                    </svg>
                </div>
                <div className="relative mx-auto bg-gradient-to-t from-gray-700 to-gray-900
            rounded-b-xl max-w-[88px] md:max-w-[177px] lg:max-w-[221px] xl:max-w-[284px] aspect-[5/2]"></div>

                {isModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" onClick={handleModalClose}>
                        <div className="bg-white p-4 rounded">
                            <img src={selectedImage} alt="portfolio image" loading="lazy" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;