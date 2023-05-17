import React, { useState, useEffect } from 'react'
import './componav.css'
import {Link} from 'react-router-dom'

import img_extend_nav from './extend.png'

function CompoNav() {
    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    const toggleNavbar = () => {
      setNavbarVisible(!isNavbarVisible);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (windowWidth < 599) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    }, [windowWidth]);

    return (
    <>
        <div className="custom_nav_extend-off">
            <img onClick={toggleNavbar} id="toggle-navbar" src={img_extend_nav} alt="icon nav deploy"/>
        </div>
        <div
        className={`custom_nav_extend ${isNavbarVisible ? 'custom_nav_extend_show' : 'custom_nav_extend_none'}`}>
            <div className="nav_extend_img">
                <img onClick={toggleNavbar} id="remove-navbar" src={img_extend_nav} alt="icon nav deploy"/>
            </div>
            <div class="custom_nav_extend_ul">
                <ul>
                    <Link to="/composants/navbar"><li>Les Navbar</li></Link>
                    <Link to="/composants/form"><li>Les Forms</li></Link>
                    <Link to="/composants/footer"><li>Les Footer</li></Link>
                    <Link to="/composants/position"><li>Les Positions Blocs</li></Link>
                    <Link to="/composants/bouton"><li>Les Boutons</li></Link>
                </ul>
            </div>
        </div>
    </>
    )
}

export default CompoNav