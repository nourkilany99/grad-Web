import React, { Component } from 'react';
import './WalkTitle.css';
import line from '../Assets/Img/line.svg';

const WalkTitle = (props) => {
    return ( 
        <>

        <div className='WalkThrough_head'>
                <p>{props.title}</p>
                <img src={line} alt='' className='line_walk' />
        </div>

        </>

     );
}
 
export default WalkTitle;