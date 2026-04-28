import React, { Component } from 'react';
import './Taskowner.css';
import SecSolution from '../component/SecSolution';
import decor_sol from '../Assets/Img/decor_sol.svg';
import Cardsol from '../common/Card_sol'
import icon from '../Assets/Img/sticker2.svg';
import Headers from '../common/Headers';
import DownloadTag from '../common/DownloadTag';
import TitleWhite from '../common/TitleWhite';
import Skillcard from '../common/Skill_card';
import WalkTitle from '../common/WalkTitle';
import WalkThrough from '../common/WalkThrough';
import mobile from '../Assets/Img/walkmobile.svg';
import Footer from '../common/Footer';


const Taskowner = () => {
    return ( 
        <>
        <SecSolution to={<>Task <br /> owners</>} p="Eureka gives you real opportunities to earn money, gain experience, and build responsibility — all inside a verified and protected platform." pStyle={{ marginTop: "10%" , marginRight:"-55%" }}/>
        <img src={decor_sol} alt='' className='decor_sol' />

        <div className='s2_sol'>
            <div className='ben-div'>
                <Headers header="Reliability Assurance" />
            </div>

            <div className='cardsol_div'>
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#ecfffb" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#fafafa" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
            </div>

        </div>

        <DownloadTag />

        <div className='green_process'>
            <TitleWhite title='Matching Process' />

            <div className='process_crds'>
            <Skillcard bgColor="#FBDDC0" width='20%' skill="1.Teens apply to your task" />
            <Skillcard bgColor="#FBDDC0" width='20%' skill="2.You review profiles and ratings" />
            <Skillcard bgColor="#FBDDC0" width='20%' skill="3.Select the most suitable applicant" />
            <Skillcard bgColor="#FBDDC0" width='20%' skill="4.Secure payment activates the task" />
            </div>
        </div>


        <div className='WalkThrough'>
        <WalkTitle title='How to Post Tasks' />
        <div className='walks'>
        <WalkThrough  no='1.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='2.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='3.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='4.' wayImg={mobile} details='Login or Sign up'  />
        <WalkThrough  no='5.' wayImg={mobile} details='Login or Sign up'  />
        </div>
        </div>

        <Footer />
        </>
     );
}
 
export default Taskowner;