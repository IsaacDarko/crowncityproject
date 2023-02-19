import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../../constants/images';

import './Slider.scss';

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);    
    const { slide01, slide02, slide03, slide04, slide05, slide06, slide07 } = images;
    const sliderImgs = [slide01, slide02, slide03, slide04, slide05, slide06, slide07]


    const nextImage = () => {
      setCurrentImageIndex((currentImageIndex + 1) % sliderImgs.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex(
        currentImageIndex === 0 ? sliderImgs.length - 1 : currentImageIndex - 1
      );
    };
  
    const getImagesToDisplay = () => {
      const imagesToDisplay = [];
      const numberOfImages = sliderImgs.length;
      const start = currentImageIndex;
  
      for (let i = start; i < start + 4; i++) {
        const imageIndex = i >= numberOfImages ? i - numberOfImages : i;
        const isPartial = i === start + 3;
        imagesToDisplay.push({ index: imageIndex, isPartial: isPartial });
      }
  
      return imagesToDisplay;
    };
  
    const imagesToDisplay = getImagesToDisplay();


    return (
        <div className="app__midtop-slider">

            <div className="nav">
                <h2 className="title" >Popular Right Now</h2>
                
                    <img src={images.back} alt="previous" onClick={prevImage} /> 
                    <img src={images.buffer} alt="button-buffer"  />
                    <img src={images.forward} alt="next" onClick={nextImage} />
                
            </div>

            <div className="slide">
                <div className="slider-container" >

                <AnimatePresence >

                    {imagesToDisplay.map((image) => (
                        <motion.img className='slide'
                            key={image.index}
                            src={sliderImgs[image.index]}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    ))}
                    <div>

                    </div>
                    <p></p>

                </AnimatePresence>
                    
                </div>
            </div>

            
          
        </div>
      );


}

export default Slider;