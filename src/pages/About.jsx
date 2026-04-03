import React, { Component } from 'react';
import './About.css';
import Nav from '../component/Nav';
import Sticker1 from '../Assets/Img/sticker2.svg';
import Sticker2 from '../Assets/Img/decor_Logo.svg';
import line_about from '../Assets/Img/decor_line_about.svg';
import decor_about from '../Assets/Img/decor_mission.svg';
import Mission from '../common/Mission';
import lock from '../Assets/Img/lock.svg';
import connect from '../Assets/Img/connect.svg';
import Headers from '../common/Headers';
import line from '../Assets/Img/line.svg';
import Why from '../common/Why';
import sticker from '../Assets/Img/sticker2.svg';
import DownloagTag from '../common/DownloadTag';
import TitleWhite from '../common/TitleWhite';
import GreenDiv from '../common/GreenDiv';
import Header from '../common/Headers';
import taregt1 from '../Assets/Img/target1.svg';
import taregt2 from '../Assets/Img/target2.svg';



const About = () => {
    return ( 
        <>
        <Nav />
        
        <div className='s1_about'>
            <div className='text_about_div'>
            <p className='about_p1'>About</p>
            <p className='about_p1_decor'>About</p>
            </div>
            <div className='stickers_hero_about'>
                <img src={Sticker1} alt='sticker1' className='Sticker1_about' />
                <img src={Sticker2} alt='sticker2' className='Sticker2_about' />
            </div>
            <p className='about_p2'>Eureka.App</p>
            <img src={line_about} alt='line_about' className='line_about' />
        </div>

        <div className='mission_all_box'>
            
            <div className='mission_all'>
                <img src={decor_about} alt='decor_about' className='decor_about' />
                <Mission title='Mission' p1='To create a' p2='secure' stick1={lock} p3='and structured' p4='platform that' p5='connects' stick2={connect} p6='Teenagers with Real-world' p7='opportunities' p8='while ensuring' p9='safety , accountability,' p10='and' p11='payment protection' p12='for everyone involved.' />
                <img src={decor_about} alt='decor_about' className='decor_about' />
            </div>

        </div>

        <section className='whyUs_s'>

            <Headers header='Why Eureka Exists'/>
            <img src={line} alt='' />

            <div className='why_all_cards'>
                <Why bgColor=' rgb(248, 230, 234)' header='Informal & Risky Connections' sticker={sticker} head2="Task exchanges happen through" li1='Social media posts' li2='Personal messages' li3='Word of mouth' endWhy='These methods lack structure and create uncertainty for both sides.' />
                <Why bgColor=' #F8FFF6' header='No Verification System' sticker={sticker} head2="Without identity verification:" li1='Fake profiles appear' li2='Trust is weak' li3='Parents hesitate' endWhy='A secure system must start with verified users' />
                <Why bgColor=' rgb(248, 230, 234)' header='Informal & Risky Connections' sticker={sticker} head2="Task exchanges happen through" li1='Social media posts' li2='Personal messages' li3='Word of mouth' endWhy='These methods lack structure and create uncertainty for both sides.' />
                <Why bgColor=' #FFF5ED' header='Informal & Risky Connections' sticker={sticker} head2="Task exchanges happen through" li1='Social media posts' li2='Personal messages' li3='Word of mouth' endWhy='These methods lack structure and create uncertainty for both sides.' />
            </div>

        </section>

        <DownloagTag/>
        
        <GreenDiv />
        
        <div className='target_div'>
            <Headers header='Target Audience' line={line} />
            <div className='targets_card'>
                <div className='target1'>
                <div className='targetWho'>
                    <p>Teenagers</p>
                    <p  className='targetWho_btn'>Starting from 18+</p>
                </div>
                <img src={taregt1} alt='' className='target1img' />
                </div>

                <div className='target1'>
                <div className='targetWho'>
                    <p>Teenagers</p>
                    <p  className='targetWho_btn'>Starting from 18+</p>
                </div>
                <img src={taregt2} alt='' className='target1img' />
                </div>

                <div className='target1'>
                <div className='targetWho'>
                    <p>Teenagers</p>
                    <p  className='targetWho_btn'>Starting from 18+</p>
                </div>
                <img src={taregt1} alt='' className='target1img' />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;