import React, { Component } from 'react';
import logo from '../Assets/Img/WhiteLogo.svg';
import './Nav.css';
import down from '../Assets/Img/VectorDown.svg'


const Nav = () => { 
    return ( 
        <>

        <header>

            <div className='logo'>
            <img src={logo} alt='logoWhite' className='logoWhite'/>
            <p className='logo_name'>Eureka</p>
            </div>

            <nav>
                <p>How it works</p>

                <div className='dropdown_div'>
                    <p>Solutions</p>
                    <img src={down} alt='down_arrow'/>
                </div>

                <div className='dropdown_div'>
                    <p>Safety</p>
                    <img src={down} alt='down_arrow'/>
                </div>

                <p>Features</p>

                <p>Pricing</p>

                <div className='dropdown_div'>
                    <p>Support</p>
                    <img src={down} alt='down_arrow'/>
                </div>

            </nav>

            <div className='cta-download-div'>
                <div className='cta-download'>
                    <p>Download App</p>
                </div>
            </div>

        </header>
        

        </>
     );
}
 
export default Nav;