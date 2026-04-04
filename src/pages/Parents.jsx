import React, { Component } from 'react';
import './Parents.css';
import Nav from '../component/Nav';
import SecSolution from '../component/SecSolution';
import decor_sol from '../Assets/Img/decor_sol.svg';
import decor_about from '../Assets/Img/decor_mission.svg';
import lock from '../Assets/Img/lock.svg';
import connect from '../Assets/Img/connect.svg';
import Mission from '../common/Mission';
import Cardsol from '../common/Card_sol'
import icon from '../Assets/Img/sticker2.svg';
import Headers from '../common/Headers';
import side_decor from '../Assets/Img/sideDesign.svg';
import lock2 from '../Assets/Img/lock2.svg';
import WalkTitle from '../common/WalkTitle';
import WalkThrough from '../common/WalkThrough';
import mobile from '../Assets/Img/walkmobile.svg';

const Parents = () => {
    return ( 
        <>
        <Nav />
        <SecSolution to='Parents' p="Eureka gives you real opportunities to earn money, gain experience, and build responsibility — all inside a verified and protected platform." pStyle={{ marginTop: "1%" , marginRight:"-60%" }}/>
        <img src={decor_sol} alt='' className='decor_sol' />

        <div className='mission_all_box'>
            
            <div className='mission_all'>
                <img src={decor_about} alt='decor_about' className='decor_about' />
                <Mission title='Safety explanation' p1='Safety' p2='is embedded at every stage of the platform through ' p4=' mandatory identity verification'  p6=' the elimination of ' p7=' and secure in-app communication that' p8=' interactions remain traceable, accountable, and monitored  to maintain a protected environment '  p10='for all users.' />
                <img src={decor_about} alt='decor_about' className='decor_about' />
            </div>

        </div>

        <div className='s2_sol'>
            <div className='ben-div'>
                <Headers header="Monitoring System" />
            </div>

            <div className='cardsol_div'>
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#ecfffb" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#fafafa" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
            </div>

        </div>

        <div className='div_pay_protect'>

                <div className='div1_pay_protect'>
                    <div className='side_decor_div'>
                    <img src={side_decor} alt='' className='one_decor' />
                    </div>
                    <div className='lock2_all'>
                        <img src={lock2} alt='' className='lock2' />
                        <p className='lock2_p'>Payment Protection</p>
                        <p className='lock2_p2'>Teens are never exposed to unpaid work.</p>
                    </div>
                </div>

                <div className='div2_pay_protect'>
                    <li>Payments are secured before tasks begin</li>
                    <li>Payments are secured before tasks begin</li>
                    <li>Payments are secured before tasks begin</li>
                </div>
        </div>

         <div className='WalkThrough'>
        <WalkTitle title='App Walkthrough' />
        <div className='walks'>
        <WalkThrough  no='1.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='2.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='3.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='4.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='1.' wayImg={mobile} details='Login or Sign up'  />
        </div>
        </div>
        </>
     );
}
 
export default Parents;