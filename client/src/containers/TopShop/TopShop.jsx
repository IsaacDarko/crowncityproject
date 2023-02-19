import React from 'react';
import images from '../../constants/images';


import './TopShop.scss';

const TopShop = () => {
  return (
    
    <div className="app__topshop">

        <div className="app__topshop-inner ">

          <div className='app__topshop-text'>

              <h1 className="text-5xl"> Introducing the new nike invincible 3 </h1>
                            
              <p className="app__sub-script"> ZoomX cushioning designed to help you,stay on your feet today, tomorrow, and beyond.</p>                

              <button className="app__shop-button"> Shop</button>
              
          </div>

            <img src={images.topshopimg} alt="nike_zoom_x" />          

        </div>


    </div>
    
  )
}

export default TopShop;