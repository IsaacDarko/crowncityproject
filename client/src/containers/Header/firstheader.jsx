import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";

import './Header.scss';


const Header = () => {
    const [selected, setSelected] = useState(null);

    const handleItemClick = (id) => {
        setSelected(id === selected ? null : id);
    };

    const variants = {
        expanded: { width: '60%' },
        contracted: { width: '20%' },
        dawn: { width: '34%' },
        noon: { width: '32%' },
        dusk: { width: '34%' }
    };

    return (

        <div className='app__header'>

            <AnimateSharedLayout>

                <motion.div className='app__header-blue'
                    layout
                    onClick={() => handleItemClick(1)}
                    initial={{ width: "34%" }}
                    variants={variants}
                    animate={selected === 1 ? 'expanded' : 'contracted'}
                    transition={{ type: "spring", bounce: 0.5 }}
                >
                    <motion.img src="../assets/nikedawns.png" alt="bluenikes" />
                    <motion.h1>NEW</motion.h1>
                </motion.div>


                <motion.div className='app__header-white'
                    layout
                    onClick={() => handleItemClick(2)}
                    variants={variants}
                    animate={selected === 2 ? 'expanded' : 'contracted'}
                    transition={{ type: "spring", bounce: 0.5 }}
                >
                    <motion.img src="../assets/nikenoons.png" alt="whitenikes" />
                    <motion.h1>BOLD</motion.h1>
                </motion.div>


                <motion.div className='app__header-pink'
                    layout
                    onClick={() => handleItemClick(3)}
                    variants={variants}
                    animate={selected === 3 ? 'expanded' : 'contracted'}
                    transition={{ type: "spring", bounce: 0.5 }}
                >
                    <motion.img src="../assets/nikedusks.png" alt="pinknikes" />
                    <motion.h1>FAST</motion.h1>
                </motion.div>

            </AnimateSharedLayout>

        </div>

    )
}

export default Header;