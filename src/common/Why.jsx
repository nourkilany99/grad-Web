import React, { Component } from 'react';
import './Why.css';
import sticker from '../Assets/Img/sticker2.svg'

const Why = (props) => {
    return ( 
        <>
        <div className='why_card_div' style={{ backgroundColor: props.bgColor  }}>
            <div className='header_why_card'>
                <p  className='headWhy'>{props.header}</p>
                <img src={props.sticker} alt='' className='stickerWhy' />
            </div>
            <p className='p1card1Why'>{props.head2}</p>
            <div className='divpointsWhy'>
                <p className='dot'>{props.li1}</p>
                <p className='dot'>{props.li2}</p>
                <p className='dot'>{props.li3}</p>
            </div>

            <p className='Whyend'>{props.endWhy}
            </p>
        </div>

        </>
     );
}
 
export default Why;