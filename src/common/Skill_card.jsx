import React, { Component } from 'react';
import './Skill_card.css';

const Skill_card = (props) => {
    return ( 
        <>
        <div className='skill_sol' style={{ backgroundColor: props.bgColor , width:props.width  }}>
        <p>{props.skill}</p>
        </div>
        </>
        );
        }
     
    ;
 
export default Skill_card;
