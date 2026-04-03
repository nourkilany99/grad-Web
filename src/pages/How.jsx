import React, { Component } from 'react';
import './How.css';
import Nav from '../component/Nav';
import logo from '../Assets/Img/decor_Logo.svg';
import pink_line from '../Assets/Img/pink_line.svg';
import GroupHow from '../Assets/Img/GroupHow.svg';
import reveal from '../Assets/Img/explore_imgs.svg';
import down from '../Assets/Img/VectorDown.svg';
import Steps from '../common/Steps';

const How = () => {
    return ( 
        <>
        <Nav />

        <section className='hero_how'>
            <p className='eureka_how'>Eureka</p>
            <div className='how_p_div'>
            <p className='hero_how_p'>How</p>
            <p className='hero_how_decor'>It</p>
            <img src={logo} alt='' className='logo_how_hero' />
            <p className='hero_how_p'>Works</p>
            </div>
            <img src={pink_line} alt='pink_line' className='pink_line' />

        </section>

        <section className='How_s2'>
            <p  className='How_s2_p'>A Structured Process Built on Verification, Protection, and Accountability</p>
            <img src={GroupHow} alt='' className='How_s2_img' />
        </section>
        
        <div className='explore_div'>
        <img src={reveal} alt='' className='expl_img' />
            <div className='exp_btn'>
            <img src={down} alt='' className='exp_btn_down' />
            <p>Reveal experiences</p>
            </div>
        </div>

        <div className='div_steps'>
            <Steps />
            <Steps />
            <Steps />
            <Steps />
        </div>
        </>
     );
}
 
export default How;