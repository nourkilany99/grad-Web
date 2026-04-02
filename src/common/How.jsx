import React, { Component } from 'react';
import './How.css'

const How = (props) => {
    return ( 
        <>
        <div className='how_card'>
            <div className='how_card_img'>
                <img src={props.Img} alt='how_img' className='card_img'/>
                <p className='card_numbr'>{props.number}</p>
            </div>

            <div className='how_p_div'>
                <p>{props.how}</p>
            </div>
        </div>

        </>
     );
}
 
export default How;