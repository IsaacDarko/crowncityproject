import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import './Header.scss';


const Header = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);


  const variants = {
    expanded: { width: '100%' },
    dawn: {width: '33.33%'},
    noon: {width: '33.33%'},
    dusk: {width: '33.33%'},
    small: {fontSize: '7.5rem'},
    large: {fontSize: '15rem', fontWeight:'boldest'}
  };

  return (

    <div className='app__header'>

      <AnimatePresence style={{ overflow: 'hidden'}}>  

          <motion.div className='app__header-blue' 
          layout
          key="1"
          onClick={() => setExpandedIndex(expandedIndex === 1 ? -1 : 1)}
          initial={{width:"34%"}}
          variants={variants}
          animate={ expandedIndex === 1 ? 'expanded' : 'dawn' }
          transition={{ type:"spring", bounce:0.4, duration: 1.5 }}
          >    
              <motion.img src="../assets/nikedawns.png" alt="bluenikes" />            
              <motion.h1 className='app__dawn-title'
              variants={variants}
              animate={ expandedIndex === 1 ? 'large' : 'small'}
              transition={{ delay: 0.2 }} 
              >NEW</motion.h1>
          </motion.div>
          
        
          <motion.div className='app__header-white' 
          layout
          key="2"
          onClick={() => setExpandedIndex(expandedIndex === 2 ? -1 : 2)}
          variants={variants}
          animate={ expandedIndex === 2 ? 'expanded' : 'noon'}
          transition={{ type:"spring", bounce:0.4, duration: 1.5 }}
          >
              <motion.img src="../assets/nikenoons.png" alt="whitenikes" />             
              <motion.h1 className='app__noon-title'
              variants={variants}
              animate={ expandedIndex === 2 ? 'large' : 'small'}
              transition={{ delay: 0.2 }} 
              >BOLD</motion.h1>
          </motion.div>

        
          <motion.div className='app__header-pink' 
          layout
          key="3"
          onClick={() => setExpandedIndex(expandedIndex === 3 ? -1 : 3)}
          variants={variants}
          animate={ expandedIndex === 3 ? 'expanded' : 'dusk' }
          transition={{ type:"spring", bounce:0.4, duration: 1.5 }}
          >
              <motion.img src="../assets/nikedusks.png" alt="pinknikes" />             
              <motion.h1 className='app__dusk-title'
              variants={variants}
              animate={ expandedIndex === 3 ? 'large' : 'small'}
              transition={{ delay: 0.2 }}              
              >FAST</motion.h1>
          </motion.div>  

      </AnimatePresence> 

    </div>

  )
}

export default Header;