import React, { Component } from 'react';
import './SecSolution.css';
import solution from '../Assets/Img/solutionIMG.svg';



const SecSolution = (props) => {
    return ( 
        <>
            <section className='s_teens_hero'>
                <img src={solution} alt='' className='solution_img' />
                <p className='solution_p'>{props.to}</p>
                <p className='solution_p2' style={props.pStyle}>{props.p}</p>
            </section>
        </>
     );
}
 
export default SecSolution;