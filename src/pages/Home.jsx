import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import DownloagTag from '../common/DownloadTag';
import How from '../common/How';
import Headers from '../common/Headers';
import { supabase } from '../Supabase';
import Section3 from '../component/Section3';
import OnBtns from '../common/OnBtns'
import OffBtn from '../common/OffBtn';
import Footer from './Footer';
import user_feed_img from '../Assets/Img/user_feed_img1.svg';
import rate from '../Assets/Img/rate.svg';
import Feedback from '../common/Feedback';
import back_icon from '../Assets/Img/back_icon.svg';
import next_icon from '../Assets/Img/next_icon.svg';
import logo from '../Assets/Img/greenlogo.svg';
import loc_icon from '../Assets/Img/loc.svg';
import grp_loc from '../Assets/Img/GroupLoc.svg';
import { Link} from "react-router-dom";



const Home = () => {    
    const [loading, setLoading] = useState(true);
    const [home_stats, sethome_stats] = useState([]);
    const [home_hero, sethome_hero] = useState([]);
    const [home_stats2, sethome_stats2] = useState([]);
    const [challenge_section, setchallenge_section] = useState([]);
    const [challenge_cards, setchallenge_cards] = useState([]);
    const [safety_cards, setsafety_cards] = useState([]);
    const [feedback, setfeedback] = useState([]);
    const [features, setfeatures] = useState([]);
    
    
    
    


    useEffect(()=>{
        
            async function getPageData(){
            const home_stats_res = await supabase.from("home_stats").select("*");
            const home_hero_res = await supabase.from("home_hero").select("*");
            const home_stats2_res = await supabase.from("home_stats2").select("*");
            const challenge_section_res = await supabase.from("challenge_section").select("*");
            const challenge_cards_res = await supabase.from("challenge_cards").select("*");
            const safety_cards_res = await supabase.from("safety_cards").select("*");
            const feedback_res = await supabase.from("feedback").select("*");
            const features_res = await supabase.from("features").select("*");

            sethome_stats(home_stats_res.data);
            sethome_hero(home_hero_res.data);
            sethome_stats2(home_stats2_res.data);
            setchallenge_section(challenge_section_res.data);
            setchallenge_cards(challenge_cards_res.data);
            setsafety_cards(safety_cards_res.data);
            setfeedback(feedback_res.data);
            setfeatures(features_res.data);
           
    
            setLoading(false);
            }
                
            getPageData()
        
            },[])
    
    if (loading) return <p>Loading....</p>;
        

    return ( 
    <>
    <section className='s1'>
        {/* <Nav/> */}

        <div className='s1-cntnt'>

            <div className='left-s1'>

                <div className='left-s1-d1'>
                {home_stats.map((item) => (
                <img src={item.icon} alt='done_icon' className='icon_done' />
                ))}
    

                {home_stats.map((item) => (
                <h1 key={item.id}>{item.label}</h1>
                ))}
                
                </div>

                {home_stats.map((item) => (
                <p className='left-p'>{item.value}</p>
                ))}

            </div>

            <div className='right-s1'>

               {home_stats2.map((item) => (
               <p className='right-p'>{item.label1}</p>
               ))}

              {home_stats2.map((item) => (
                <p className='right-p'>{item.label2}</p>
              ))}

              {home_stats2.map((item) => (
                <p className='right-p'>{item.label3}</p>
              ))}

        
            </div>
        </div>

        <div className='middle-s1'>

                <div className='middle-s1-part1'>
                    {home_hero.map((item) => (
                     <img src={item.background_image} alt='decor_hero' className='decor_hero' />
                    ))}
                    
                    <div className='hero_text1' >

                    {home_hero.map((item) => (
                     <h1 className='decor_text_hero'>{item.line1}</h1>
                    ))}

                    {home_hero.map((item) => (
                     <h1 className='text_hero'>{item.line2}</h1>
                    ))}


                    {home_hero.map((item) => (
                     <h1 className='text_hero2'>{item.line3}</h1>
                    ))}
        
                    
                    </div>
                </div>

                <div className='middle-s1-part2'>
                    {home_hero.map((item) => (
                      <h1 className='text_hero_part2'>{item.line4}</h1>
                    ))}
                   
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

                {challenge_section
                .filter(item => item.id === 1)
                .map((item) => (
                <Headers header={item.title} />
                ))}

                {challenge_section
                .filter(item => item.id === 1)
                .map((item) => (
                <p className='chal_p2'>{item.description}</p>
                ))}


            </div>

            <div className='chalenge-sec-d2'>

                {challenge_cards
                .filter(item => item.id === 1)
                .map((item) => (
                <p className='chal_card1'>{item.text}</p>
                ))}


                {challenge_cards
                .filter(item => item.id === 2)
                .map((item) => (
                <p className='chal_card2'>{item.text}</p>
                ))}

                {challenge_cards
                .filter(item => item.id === 3)
                .map((item) => (
                <p className='chal_card3'>{item.text}</p>
                ))}

                {challenge_cards
                .filter(item => item.id === 4)
                .map((item) => (
                <p className='chal_card4'>{item.text}</p>
                ))}

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

            {safety_cards
            .filter(item => item.id === 1)
            .map((item) => (
             <div key={item.id}>
             <h1 className='safety_cards1_h'>{item.title}</h1>
 
            {item.image && (
              <img src={item.image} alt={item.title} />
            )}

            <p className='safety_cards1_p'>{item.description}</p>
            </div>
            ))
            }

            </div>

            <div className='safety_cards2'>
            {safety_cards
            .filter(item => item.id === 2)
            .map((item) => (
             <div key={item.id}>
             <h1 className='safety_cards1_h'>{item.title}</h1>
             <p className='safety_cards1_p'>{item.description}</p>
            </div>
            ))
            }
                    
                </div>
            </div>

            <div className='safety_cards_d2'>
            <div className='safety_cards3'>
            {safety_cards
            .filter(item => item.id === 3)
            .map((item) => (
            <div key={item.id}>
             <h1 className='safety_cards1_h'>{item.title}</h1>
             <p className='safety_cards1_p'>{item.description}</p>
            </div>
            ))
            }
            </div>

            <div className='safety_cards4'>
            {safety_cards
            .filter(item => item.id === 4)
            .map((item) => (
            <div key={item.id}>
             <h1 className='safety_cards1_h'>{item.title}</h1>
             <p className='safety_cards1_p'>{item.description}</p>
            </div>
            ))
            }
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
        {feedback.map((item) => (
        <Feedback
        key={item.id}
        Img={item.image || user_feed_img}
        numberTask={item.tasks_count}
        name={item.name}
        numberRate={item.rating}
        age={item.age}
        rate={rate}
        feed={item.text}
        />
        ))}
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
            {features
            .map((item) => (
            <div key={item.id}>
                 <img src={item.icon} alt='loc_icon' className='loc_icon' />
                 <p>{item.title}</p>
            </div>
            ))
            }
            </div>

            {features
            .map((item) => (
            <div>
            <p className='p_loc'>{item.description}</p>
            <Link className='a' to="/features">
            <p className='Explore_btn'>{item.cta_link}</p>
            </Link>
            </div>
            ))
            }
        
        </div>
        <div className='div2_s6'>
                <img src={grp_loc} alt='grp_loc' className='' />
        </div>
        </div>
    </section>

    <Footer />
    
    

    </> 
    );
}
 
export default Home;