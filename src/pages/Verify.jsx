import React from 'react';
import './Verify.css';
import Footer from '../common/Footer';
import mobileFooter from '../Assets/Img/loginFotter.svg';
import googleStore from '../Assets/Img/googlestore.svg';

const tabs = ['ID upload process', 'Selfie verification', 'Manual review', 'Approval / rejection logic', 'Security architecture overview'];

const Verify = () => {
    return (
        <>
            <section className='verify-page'>
                <div className='verify-container'>
                    <div className='verify-hero'>
                        <h1>Verification System</h1>
                    </div>

                    <div className='verify-tabs'>
                        {tabs.map((tab, idx) => (
                            <button key={tab} type='button' className={`verify-tab ${idx === 0 ? 'active' : ''}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <article className='verify-main-card'>
                        <h2>1. ID Upload Process</h2>
                        <p>Users upload government-issued identification documents.</p>

                        <div className='upload-boxes'>
                            <div className='upload-box'>Front of the ID</div>
                            <div className='upload-box'>Back of the ID</div>
                        </div>

                        <div className='requirements'>
                            <p>Requirements:</p>
                            <ul>
                                <li>Clear photo</li>
                                <li>Valid expiration date</li>
                                <li>Matching full name</li>
                                <li>No edits</li>
                            </ul>
                        </div>
                    </article>

                    <section className='verify-cta'>
                        <button type='button'>Download Now</button>
                        <div className='verify-cta-content'>
                            <img src={mobileFooter} alt='phone_mockup' className='verify-phone' />
                            <div className='store-badges'>
                                <img src={googleStore} alt='google_store' />
                                <img src={googleStore} alt='app_store' />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Verify;
