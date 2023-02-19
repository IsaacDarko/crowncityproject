import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import images from '../../constants/images';

import './Header.scss';


const Header = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);


  const variants = {
    expanded: { width: '70%' },
    dawn: {width: '33.33%'},
    noon: {width: '33.33%'},
    dusk: {width: '33.33%'},
    small: {fontSize: '7.5rem'},
    large: {fontSize: '15rem', fontWeight:'boldest'},
    wind: {rotate: '30deg', scale:'1.3' },
    unwind: {rotate: '0deg', scale:'1'}
  };

  return (

    <div className='app__header'>

      <AnimatePresence style={{ overflow: 'hidden'}}>  

          <motion.div className='app__header-blue' 
          layout
          key="1"
          onClick={() => setExpandedIndex(expandedIndex === 1 ? -1 : 1)}
          variants={variants}
          animate={ expandedIndex === 1 ? 'expanded' : 'dawn' }
          transition={{ type:"spring", bounce:0.3, duration: 1.2 }}
          >    
              <motion.img className='app__hoverimg-dawn' src={images.nikedawns} alt="bluenikes" 
              variants={variants}
              animate={ expandedIndex === 1 ? 'wind' : 'unwind'}
              transition={{ delay:0.05, duration: 0.2 }}
              />

              <motion.h1 className='app__dawn-title'
              variants={variants}
              animate={ expandedIndex === 1 ? 'large' : 'small'}
              transition={{ delay: 0.1 }} 
              >NEW</motion.h1>
          </motion.div>
          
        
          <motion.div className='app__header-white' 
          layout
          key="2"
          onClick={() => setExpandedIndex(expandedIndex === 2 ? -1 : 2)}
          variants={variants}
          animate={ expandedIndex === 2 ? 'expanded' : 'noon'}
          transition={{ type:"spring", bounce:0.3, duration: 1.2 }}
          >
              <motion.img className='app__hoverimg-noon' src={images.nikenoons} alt="whitenikes" 
              variants={variants}
              animate={ expandedIndex === 2 ? 'wind' : 'unwind'}
              transition={{ delay:0.05, duration: 0.2 }}
              />

              <motion.h1 className='app__noon-title'
              variants={variants}
              animate={ expandedIndex === 2 ? 'large' : 'small'}
              transition={{ delay: 0.1 }} 
              >BOLD</motion.h1>
          </motion.div>

        
          <motion.div className='app__header-pink' 
          layout
          key="3"
          onClick={() => setExpandedIndex(expandedIndex === 3 ? -1 : 3)}
          variants={variants}
          animate={ expandedIndex === 3 ? 'expanded' : 'dusk' }
          transition={{ type:"spring", bounce:0.3, duration: 1.2 }}
          >
              <motion.img className='app__hoverimg-dusk' src={images.nikedusks} alt="pinknikes" 
              variants={variants}
              animate={ expandedIndex === 3 ? 'wind' : 'unwind'}
              transition={{ delay:0.05, duration: 0.2 }}
              />

              <motion.h1 className='app__dusk-title'
              variants={variants}
              animate={ expandedIndex === 3 ? 'large' : 'small'}
              transition={{ delay: 0.1 }}              
              >FAST</motion.h1>
          </motion.div>  

      </AnimatePresence> 

    </div>

  )
}

export default Header;