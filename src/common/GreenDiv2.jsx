import React, { Component } from 'react';
import './GreenDiv2.css';

const GreenDiv = (props) => {
    return ( 
        <>
        <div className='green2_div'>

            <div className='green2_head'>
            <p className='green2_title'>{props.title}</p>
            <p className='green2_subtitle'>{props.subtitle}</p>
            </div>

            <div className='green2_cntnt'>
                <img src={props.sticker} alt='' className='green2_img' />
                <div className='green2_ps'>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                    <li>{props.li4}</li>
                    <li>{props.li5}</li>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default GreenDiv;