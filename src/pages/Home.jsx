import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import Nav from '../component/Nav';
import done from '../Assets/Img/done_icon.svg';
import decor_hero from '../Assets/Img/decorHero.svg';
import line_green from '../Assets/Img/line.svg'
import DownloagTag from '../common/DownloadTag';
import How from '../common/How';
import Headers from '../common/Headers';
import { supabase } from '../Supabase';
import Section3 from '../component/Section3';
import Sticker_verify from '../Assets/Img/identy_stick.svg';
import OnBtns from '../common/OnBtns'
import OffBtn from '../common/OffBtn';
import user_feed_img from '../Assets/Img/user_feed_img1.svg';
import rate from '../Assets/Img/rate.svg';
import Feedback from '../common/Feedback';
import back_icon from '../Assets/Img/back_icon.svg';
import next_icon from '../Assets/Img/next_icon.svg';
import logo from '../Assets/Img/greenlogo.svg';
import loc_icon from '../Assets/Img/loc.svg';
import grp_loc from '../Assets/Img/GroupLoc.svg';


const Home = () => {    
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        
            async function getPageData(){
           
    
                setLoading(false);
                }
                
                getPageData()
        
                },[])
    
    if (loading) return <p>Loading....</p>;
        

    return ( 
    <>
    <section className='s1'>
        <Nav/>

        <div className='s1-cntnt'>

            <div className='left-s1'>

                <div className='left-s1-d1'>
                <img src={done} alt='done_icon' className='icon_done' />
                <h1>Task done</h1>
                </div>

            <p className='left-p'>25,000</p>
            </div>

            <div className='right-s1'>

            <p className='right-p'>Safety</p>
            <p className='right-p'>Verification </p>
            <p className='right-p'>Honest Rating</p>

            </div>
        </div>

        <div className='middle-s1'>

                <div className='middle-s1-part1'>
                    <img src={decor_hero} alt='decor_hero' className='decor_hero' />
                    <div className='hero_text1' >
                    <h1 className='decor_text_hero'>Earn</h1>
                    <h1 className='text_hero'>Money.</h1>
                    <h1 className='text_hero2'>Gain</h1>
                    </div>
                </div>

                <div className='middle-s1-part2'>
                    <h1 className='text_hero_part2'>Experience</h1>
                </div>

        </div>

    </section>

    <section className='s2'>

        <div className='buttons'>
            <p className='chall-btn'>Challenge</p>
            <p className='prblm-btn'>Problem statement</p>
        </div>

        <div className='chalenge-sec'>

            <div className='chalenge-sec-d1'>
                <Headers header='Challenge' />
                {/* <h2 className='chal_p'>Challenge</h2> */}
                <p className='chal_p2'>Teenagers today are eager to earn money, 
                gain experience, and build independence — 
                yet most available opportunities are informal, unverified, and risky.
                At the same time, adults need reliable help with everyday tasks but 
                hesitate to trust unknown individuals without proper accountability. </p>
            </div>

            <div className='chalenge-sec-d2'>
                <p className='chal_card1'>1.Informal & Unstructured Opportunities</p>
                <p className='chal_card2'>2.Lack of Identity Verification</p>
                <p className='chal_card3'>3.Unprotected Payments</p>
                <p className='chal_card4'>4.No Accountability System</p>
            </div>

        </div>

    </section>

    <DownloagTag/>

    <Section3 />

    <section className='s4'>

        <div className='head_s4_div'>
            <div className='head_s4_div1'>
                <p className='head_s4_h'>Safety</p>
                <div className='all_head_s4_p'>
                <p className='head_s4_p1'>It is the</p>
                <p className='span_s4_1'>Foundation</p>
                <p className='head_s4_p2'>of the <span className='plate_span'>platform</span></p>
                </div>
            </div>

            <p className='head_s4_div2'>Safety is built into every step of the system, ensuring verified users, protected payments, and accountable interactions.</p>
        </div>

        <div className='safety_cards'>
            <div className='safety_cards_d1'>
                <div className='safety_cards1'>
                    <h1 className='safety_cards1_h'>Identity Verification System</h1>
                    <img src={Sticker_verify} alt='Sticker_verify' />
                    <p className='safety_cards1_p'>A mandatory multi-step identity verification system ensures every user is real, traceable, and accountable before accessing the platform.</p>
                </div>

                 <div className='safety_cards2'>
                    <h1 className='safety_cards1_h'>Protected Payment System</h1>
                    <p className='safety_cards1_p'>A secure escrow-based payment system holds funds safely until task completion, protecting both effort and money.</p>
                </div>
            </div>

            <div className='safety_cards_d2'>
                <div className='safety_cards3'>
                    <h1 className='safety_cards1_h'>Identity Verification System</h1>
                    <p className='safety_cards1_p'>A mandatory multi-step identity verification system ensures every user is real, traceable, and accountable before accessing the platform.</p>
                </div>

                 <div className='safety_cards4'>
                    <h1 className='safety_cards1_h'>Rating & Accountability System</h1>
                    <p className='safety_cards1_p'>A transparent rating and accountability system tracks performance, builds reputation, and reinforces responsible behavior across the platform.</p>
                </div>
            </div>
        </div>

    </section>

    <section className='s5'>
        <Headers header='Feedback' />
        <div className='btns_feed'>
            <OnBtns title='Teenagers' />
            <OffBtn title='Task owners' />
            <OffBtn title='Parents' />
        </div>
        
        <div className='feed_opinion_div'>
        <Feedback Img={user_feed_img} numberTask="20+ tasks" name='Jana Hatem' numberRate='4.6'  age='18 years old' rate={rate} feed='The verification system made me feel comfortable accepting tasks.' />
        <Feedback Img={user_feed_img} numberTask="20+ tasks" name='Jana Hatem' numberRate='4.6'  age='18 years old' rate={rate} feed='The verification system made me feel comfortable accepting tasks.' />
        <Feedback Img={user_feed_img} numberTask="20+ tasks" name='Jana Hatem' numberRate='4.6'  age='18 years old' rate={rate} feed='The verification system made me feel comfortable accepting tasks.' />
        </div>

        <div className='bck-nxt-div'>
            <img src={back_icon} alt='back_icon' className='bck_icon' />
            <p>1 / 7</p>
            <img src={next_icon} alt='back_icon' className='bck_icon' />
        </div>
    </section>

    <section className='s6'>
        <div className='div_s6'>
            <div className='div1_s6'>
            <img src={logo} alt='logo' className='logo_feat' />
            <p className='head_s6_h'>Top features</p>
            <div className='div1_s6_loc'>
                <img src={loc_icon} alt='loc_icon' className='loc_icon' />
                <p>Smart Task Matching</p>
            </div>
            <p className='p_loc'>Location-based discovery and filtering connect the right people efficiently.</p>
            <p className='Explore_btn'>Explore features</p>
            </div>
            <div className='div2_s6'>
                <img src={grp_loc} alt='grp_loc' className='' />
            </div>
        </div>
    </section>

    

    </> 
    );
}
 
export default Home;