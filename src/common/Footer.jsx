import React from 'react';
import './Footer.css';
import mobile_footer from '../Assets/Img/loginFotter.svg';
import google_play from '../Assets/Img/googlestore.svg';
import footer_bck from '../Assets/Img/back_footer_design.svg';
import footer_decor from '../Assets/Img/footer_decor.svg';

const Footer = () => {
    return (
        <footer>
            <div className='div1_footer'>
                <p className='decor_footer_dwn'>Download now</p>
                <img src={footer_bck} alt='' className='bck_footer' />

                <div className='div1_footer_s1'>
                    <div className='div1_footer_s1_p1'>
                        <p className='foter_p_eur'>Eureka</p>
                        <p className='foter_p_eur_p'>Join a verified platform where teens earn responsibly and adults find reliable help - all within a protected and structured system.</p>
                    </div>

                    <img src={mobile_footer} alt='' className='mobile_footer' />

                    <div className='div_footer_GP'>
                        <img src={google_play} alt='' className='footer_GP' />
                    </div>
                </div>
            </div>

            <div className='footer-part2'>
                <div className='footer-part2-left-rail'>
                    <p>© 2026 Eureka. All rights reserved.</p>
                </div>

                <div className='footer-part2-left'>
                    <h2>LOOKING FOR A GIG WORK</h2>
                    <button type='button' className='footer-part2-download-btn'>Download app</button>

                    <div className='footer-part2-art-wrap'>
                        <img src={footer_decor} alt='' className='footer_decor' />
                    </div>
                </div>

                <div className='footer-part2-center-card'>
                    <div className='footer-part2-col'>
                        <h4>Safety</h4>
                        <p>Safety &amp; Trust</p>
                        <p>Verification System</p>
                        <p>Reports &amp; Disputes</p>
                        <p>Community Guidelines</p>
                    </div>

                    <div className='footer-part2-col'>
                        <h4>Platform</h4>
                        <p>How It Works</p>
                        <p>Pricing</p>
                        <p>For Teens</p>
                        <p>For Parents</p>
                        <p>For Task Owners</p>
                    </div>

                    <div className='footer-part2-col'>
                        <h4>Support</h4>
                        <p>FAQ</p>
                        <p>Contact &amp; Support</p>
                        <p>Help Center</p>
                    </div>
                </div>

                <div className='footer-part2-right'>
                    <div className='footer-part2-top-shapes'>
                        <div className='shape orange' />
                        <div className='shape pink' />
                    </div>

                    <div className='footer-part2-social-wrap'>
                        <p className='social-title'>Social</p>
                        <div className='footer-part2-icons'>
                            <span>IG</span>
                            <span>DB</span>
                            <span>TW</span>
                            <span>IN</span>
                        </div>
                        <div className='footer-part2-links'>
                            <a href='/#'>Terms of Service</a>
                            <a href='/#'>Privacy Policy</a>
                            <a href='/#'>Cookies Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
