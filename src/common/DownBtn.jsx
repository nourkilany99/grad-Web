import React, { Component } from 'react';
import './DownBtn.css';

import download from '../Assets/Img/downloadIcon.svg'

const DownBtn = () => {
    return ( 
        <>

        <div className='downBtn'>
            <img src={download} alt='download' className='download_icon' />
            <p>Download app</p>
        </div>
        
        
        
        </>
     );
}
 
export default DownBtn;