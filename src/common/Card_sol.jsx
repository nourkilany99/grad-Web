import React, { Component } from 'react';
import './Card_sol.css';


const Card_sol = (props) => {
    return ( 
        <>
        <div className='card_sol' style={{ backgroundColor: props.bgColor  }}>
            <img src={props.icon} alt='icon' />
            <p>{props.p}</p>
        </div>
        </>
     );
}
 
export default Card_sol;