import React, { Component } from 'react';
import './Safety.css';
import design_safe from '../Assets/Img/designSafety.svg' ;
import Cardsol from '../common/Card_sol';
import icon from '../Assets/Img/done_icon.svg';
import Headers from '../common/Headers';
import decor_safety from '../Assets/Img/decor_safety_s3.svg';
import Skillcard from '../common/Skill_card';
import verify from '../Assets/Img/verify.svg';
import complete from '../Assets/Img/completeIcon.svg';
import rate from '../Assets/Img/ratingICON.svg';
import history from '../Assets/Img/historyICON.svg';
import GreenDiv2 from '../common/GreenDiv2';
import sticker from '../Assets/Img/how_stick1.svg';
import DownloadTag from '../common/DownloadTag';
import secure_inchat from '../Assets/Img/secure_inchat.svg'

const Safety = () => {
    return ( 
        <>
        <section className='s1_safe'>
        <div className='safety_hero'>
            <p className='safety_p'>Safety</p>
            <p className='and_hero'>&</p>
            <p className='trust_p'>Trust</p>
        </div>

        <img src={design_safe} alt='' className='design_safe' />

        <div className='safety_long_p_hero'>
            <p>Built on layered protection mechanisms 
            designed to create a controlled and accountable 
            environment for both teenagers and task owners.</p>
        </div>
        </section>

        <section className='s2_safe'>

            <div className='s2_safe_titles'>
                <p className='s2_safe_h'>24-hour verification</p>
                <p className='s2_safe_p'>Every user must complete identity verification before gaining full platform access.</p>
            </div>

            <div  className='s2_safe_cards'>
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
            </div>

            <div className='s2_hint_div'>
                <p>This eliminates fake accounts and reduces impersonation risk.</p>
            </div>
        </section>

        <section className='s3_safe'>
            <div className='s3_safe_hero'>
                <div className='s3_safe_hero_d1'>
                <p className='s3_safe_hero_title'>Profile Transparency</p>
                <Headers header='Profiles include' />
                <p className='s3_safe_hero_p'>Once approved, users receive a Verified Badge displayed on their profile.</p>
                </div>

                <div className='s3_safe_hero_d2'>
                    <img src={decor_safety} alt="" className='s3_safe_hero_decor' />
                </div>
            </div>

            <div className='safety_crds'>
            <Skillcard bgColor="#FBDDC0" icon={verify} skill="Task responsibility" width="18%" padding='1% 2%' />
            <Skillcard bgColor="#FBDDC0" icon={complete} skill="Task responsibility" width="18%" padding='1% 3%' />
            <Skillcard bgColor="#FBDDC0" icon={rate} skill="Task responsibility" width="18%" padding='1% 3%' />
            <Skillcard bgColor="#FBDDC0" icon={history} skill="Task responsibility" width="18%" padding='1% 3%' />
            </div>

        </section>

        <GreenDiv2 width='20vw' padding='2% 0 0 10%' title='Structured Dispute System' subtitle='If a problem occurs, users can initiate a dispute directly within the task page.' sticker={sticker} li1='All users are verified before access' li2='No anonymous accounts' li3='Secure in-app messaging only' li4='Payments secured before work begins' li5='Report issues instantly if needed' />

        <DownloadTag />

        <div className='contact_sol'>
            <div className='head_s3_contact'>
            <Headers header="Contact" />
            <p className='head_s3_sol_p'>All communication happens inside the platform.</p>
            </div>

            <div className='skill_contact_cntnt'>
            <img src={secure_inchat} alt='' className='contact_pix' />
            <div className='contact_rate_crds'>
            <Skillcard padding='1%' width="30%" bgColor="#fcf2e9" skill="Set location and deadline" />
            <Skillcard padding='1%' width="30%" bgColor="#fcf2e9" skill="Task responsibility" />
            <Skillcard padding='1%' width="30%" bgColor="#fcf2e9" skill="Set location and deadline" />
            </div>
            </div>

        </div>
        </>
     );
}
 
export default Safety;