import React from 'react';
import images from '../../constants/images';

import './MidBottom.scss';

const MidBottom = () => {
  return (

    <div className="app__mid-bottom">
      
        <h1 className="title">Popular Right Now</h1>

        <div className="app__mid-bottom-categories">
            <div>
                <img className="cat-imgs" src={images.hoodieguy} alt="mens_nike_fleece" />
                <p className="label">Men's Nike Fleece</p>
            </div>

            <div>
                <img className="cat-imgs" src={images.hoodiegirl} alt="womens_nike_fleece" />
                <p className="label">Women's Nike Fleece</p>
            </div>

            <div>
                <img className="cat-imgs" src={images.hoodiekid} alt="kids_nike_fleece" />
                <p className="label">Kid's Nike Fleece</p>
            </div>
        </div>

    </div>

  )
}

export default MidBottom;