import React, { Component } from 'react';
import './Mission.css';


const Mission = (props) => {
    return ( 
    <>
    <div className='missionbox'>
        <p className='title_box'>{props.title}</p>
        <div className='box_line1'>
            <p>{props.p1}</p>
            <p className='line1_bold'>{props.p2}</p>
            <img src={props.stick1} alt='lock' /> 
            <p>{props.p3}</p>
        </div>
        <div className='box_line1'>
            <p>{props.p4}</p>
        </div>
        <div className='box_line1'>
            <p className='line2_bold'>{props.p5}</p>
            <img src={props.stick2} alt='connect' />
            <p>{props.p6}</p>
            <p>{props.p7}</p>
        </div>
        <div className='box_line1'>
            <p>{props.p8}</p>
            <p className='line1_bold'>{props.p9}</p>
        </div>
        <div className='box_line1'>
            <p>{props.p10}</p>
            <p className='line1_bold'>{props.p11}</p>
        </div>
        <div className='box_line1'>
            <p>{props.p12}</p>
        </div>
    </div>
    </> );
}
 
export default Mission;