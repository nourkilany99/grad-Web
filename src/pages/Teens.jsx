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
import GreenDiv2 from '../common/GreenDiv2';
import sticker from '../Assets/Img/lock.svg';
import DownloadTag from '../common/DownloadTag';
import WalkThrough from '../common/WalkThrough';
import mobile from '../Assets/Img/walkmobile.svg';
import WalkTitle from '../common/WalkTitle';


const Teens = () => {
    return ( 
        <>
        <Nav />

        <SecSolution to='Teens' p="Eureka gives you real opportunities to earn money, gain experience, and build responsibility — all inside a verified and protected platform." pStyle={{ marginTop: "2%" }} />
        <img src={decor_sol} alt='' className='decor_sol' />

        <div className='s2_sol'>
            <div className='ben2-div'>
            <Headers header="Benefits" />
            </div>
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

        <GreenDiv2 title='Earning Safely' subtitle='Your safety comes first.' sticker={sticker} li1='All users are verified before access' li2='No anonymous accounts' li3='Secure in-app messaging only' li4='Payments secured before work begins' li5='Report issues instantly if needed' />
        <DownloadTag />

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
 
export default Teens;