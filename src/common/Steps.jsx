import React, { Component } from 'react';
import './Steps.css';
import Headers from '../common/Headers';
import next_arrow from '../Assets/Img/next_arrow.svg';

const Steps = () => {
    return ( 
        <>
        <div className='div_all_steps'>
            <div className='header_step'>
            <Headers header='Step1' />
            </div>

            <div className='div_bck_steps'>
                <div className='div_steps_cntnt'>
                    <img src={next_arrow} alt='next_arrow'  className='next_arrow' />
                    <div className='div_next_arrow'>
                        <p>1.User creates an account</p>
                        <p>2.Uploads government ID</p>
                        <p>3.Completes selfie verification</p>
                        <p>4.Admin review within 24 hours</p>
                        <p>5.Verified badge appears on approval</p>
                    </div>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Steps;