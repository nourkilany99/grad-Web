import React, { Component } from 'react';
import './Headers.css'

const Header = ({ header, line }) => {
    return ( 
        <>
        <div className='header_div'>
        <h2 className='header'>{header}</h2>
        {line && <img src={line} alt='line' />}
        </div>
        </>
     );
}
 
export default Header;