import React, { Component } from 'react';
import './Features.css';
import decor_about from '../Assets/Img/decor_mission.svg';
import Mission from '../common/Mission';
import verify from '../Assets/Img/verify.svg';
import location from '../Assets/Img/location.svg';
import chatIcon from '../Assets/Img/chatIcon.svg';
import rate from '../Assets/Img/rate.svg';
import downloadIcon from '../Assets/Img/downloadIcon.svg';
import Footer from '../common/Footer';


const Features = () => {
    return ( 
        <>
        <section className='hero_s_features'>
            <p className='hero_s_features_decor'>Our</p>
            <p className='hero_s_features_h'>Features</p>
            <p className='hero_s_features_p'>Eureka combines verification, secure transactions, and accountability tools into one integrated ecosystem.</p>
        </section>

        <div className='mission_all_box'>
            
            <div className='mission_all'>
                <img src={decor_about} alt='decor_about' className='decor_about' />
                <Mission title='What makes us special' p1='Safety' p2='is embedded at every stage of the platform through ' p4=' mandatory identity verification'  p6=' the elimination of ' p7=' and secure in-app communication that' p8=' interactions remain traceable, accountable, and monitored  to maintain a protected environment '  p10='for all users.' />
                <img src={decor_about} alt='decor_about' className='decor_about' />
            </div>

        </div>

        <section className='features_breakdown_section'>
            <div className='features_breakdown_left'>
                <div className='features_breakdown_sticky'>
                    <div className='features_breakdown_intro'>
                        <p className='features_breakdown_title'>Core Features Breakdown</p>
                        <button className='features_download_btn' type='button'>
                            <img src={downloadIcon} alt='' />
                            <span>Download app</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='features_breakdown_right'>
                <div className='feature_card'>
                    <div className='feature_card_text'>
                        <h3>Verified User Access</h3>
                        <p>Every user must complete identity verification before interacting on the platform.</p>
                        <p>Verified badges help increase trust and transparency.</p>
                    </div>
                    <div className='feature_card_visual feature_card_visual_dark'>
                        <img src={verify} alt='Verified user access' className='feature_visual_icon feature_visual_icon_large' />
                    </div>
                </div>

                <div className='feature_card'>
                    <div className='feature_card_text'>
                        <h3>Smart Task Matching</h3>
                        <p>Location-based task visibility with category, budget, deadline, and rating filters.</p>
                        <p>Optimized matching improves reliability for both sides.</p>
                    </div>
                    <div className='feature_card_visual feature_card_visual_map'>
                        <div className='feature_map_line'></div>
                        <img src={location} alt='Task location' className='feature_visual_pin feature_visual_pin_left' />
                        <img src={location} alt='Task destination' className='feature_visual_pin feature_visual_pin_right' />
                        <div className='feature_map_badge'>23s</div>
                    </div>
                </div>

                <div className='feature_card'>
                    <div className='feature_card_text'>
                        <h3>Secure In-App Communication</h3>
                        <p>Private, monitored messaging system with conversation history for dispute resolution.</p>
                        <p>No external contact required.</p>
                    </div>
                    <div className='feature_card_visual feature_card_visual_light'>
                        <img src={chatIcon} alt='Secure communication' className='feature_visual_icon feature_visual_chat' />
                    </div>
                </div>

                <div className='feature_card'>
                    <div className='feature_card_text'>
                        <h3>Escrow-Based Payment Protection</h3>
                        <p>Funds are secured before task execution and released automatically after completion.</p>
                        <p>Structured refund logic protects disputes.</p>
                    </div>
                    <div className='feature_card_visual feature_card_visual_payment'>
                        <img src={rate} alt='Payment protection' className='feature_visual_rating' />
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        </>
     );
}
 
export default Features;