import "./gallery.css";
import { SliderData } from './gallery-data';
import ImageSlider from './image-slider';

const Gallery = () => {
  return (
    <div id="gallery" className="container gallery-container">
      <h1 className="gallery-txt">Gallery</h1>
      <ImageSlider slides={SliderData}/>
    </div>
  );
};

export default Gallery;
