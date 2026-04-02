import React, { Component } from 'react';
import './OffBtn.css';

const OffBtn = (props) => {
    return ( 
        <>
        <div className='offBtn_div'>
        <p className='offBtn'>{props.title}</p>
        </div>
        </>
     );
}
 
export default OffBtn;