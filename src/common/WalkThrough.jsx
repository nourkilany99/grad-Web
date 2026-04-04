import React, { Component } from 'react';
import './WalkThrough.css';

const WalkThrough = (props) => {
    return ( 
        <>

        <div className='WalkThrough_divs'>

                <div className='WalkThrough_div1'>
                    <div className='WalkThrough_div1_card'>
                    <p className='WalkThrough_no'>{props.no}</p>
                    <img src={props.wayImg} alt='' className='walk_mobile' /> 
                    </div>

                    <div  className='walk_detail'>
                    <p>{props.details}</p>
                    </div>
                </div>

        </div>
        
        </>
     );
}
 
export default WalkThrough;