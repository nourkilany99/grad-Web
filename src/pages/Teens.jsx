import React, { Component } from 'react';
import './Teens.css';
import Nav from '../component/Nav';
import SecSolution from '../component/SecSolution';
import decor_sol from '../Assets/Img/decor_sol.svg';
import Cardsol from '../common/Card_sol';
import icon from '../Assets/Img/sticker2.svg';
import Headers from '../common/Headers';
import rate_sol from '../Assets/Img/rate_sol.svg';
import Skillcard from '../common/Skill_card';
import GreenDiv from '../common/GreenDiv';

const Teens = () => {
    return ( 
        <>
        <Nav />

        <SecSolution to='Teens' p="Eureka gives you real opportunities to earn money, gain experience, and build responsibility — all inside a verified and protected platform." />
        <img src={decor_sol} alt='' className='decor_sol' />

        <div className='s2_sol'>
            <headers header="Benefits" />
            <div className='cardsol_div'>
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#ecfffb" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#fafafa" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
            </div>
        </div>

        <div className='s3_sol'>
            <div className='head_s3_sol'>
            <Headers header="Skill Building" />
            <p className='head_s3_sol_p'>Each task helps you develop valuable skills</p>
            </div>

            <div className='skill_rate_cntnt'>
            <img src={rate_sol} alt='' className='rate_sol' />
            <div className='skill_rate_crds'>
            <Skillcard bgColor="#FBDDC0" skill="Task responsibility" />
            <Skillcard bgColor="#FBDDC0" skill="Task responsibility" />
            <Skillcard bgColor="#FBDDC0" skill="Task responsibility" />
            <Skillcard bgColor="#FBDDC0" skill="Task responsibility" />
            <Skillcard bgColor="#FBDDC0" skill="Task responsibility" />
            </div>
            </div>

        </div>

        <GreenDiv />

        </>
     );
}
 
export default Teens;