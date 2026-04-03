import React, { Component } from 'react';
import './TempCard.css';
const TempCard = (props) => {
    return ( 
        <>
        <div className='temp_card_div' style={{ backgroundColor: props.bgColor  }}>
            <div className='header_temp_card'>
                <p  className='headWhy'>{props.header}</p>
                <img src={props.sticker} alt='' className='stickerWhy' />
            </div>
            <p className='p1card1Why'>{props.head2}</p>
           
            <p className='Whyend'>{props.endWhy}</p>
        </div>

        </>
     );
}
 
export default TempCard;