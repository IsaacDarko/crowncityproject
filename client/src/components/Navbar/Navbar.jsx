import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="app__navbar">

            <div className='app__navbar-logo'>
                <img className="app__site-logo" src="../assets/svgs/sitelogo.png" alt='logo' />
            </div>

            <ul className='app__navbar-menu'>
                <li className="navbar-links"> <a href="#">New&Featured</a> </li>
                <li className="navbar-links"> <a href="#">Men</a> </li>
                <li className="navbar-links"> <a href="#">Women</a> </li>
                <li className="navbar-links"> <a href="#">Kids</a> </li>
                <li className="navbar-links"> <a href="#">Sale</a> </li>
            </ul>

            <div className='navbar-icons'> 
                <a href="#"><img className="icons" src="../assets/svgs/heart.png" alt="favourite" /></a>
                <a href="#"><img className="icons" src="../assets/svgs/cart.png" alt="cart" /></a>
            </div>
        
    </div>
  )
}

export default Navbar;