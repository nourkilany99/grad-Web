import React, { Component } from 'react';
import './OnBtns.css'

const OnBtns = (props) => {
    return ( 
        <>
        <div className='onBtn_div'>
        <p className='onBtn' >{props.title}</p>
        </div>
        </>
     );
}
 
export default OnBtns;