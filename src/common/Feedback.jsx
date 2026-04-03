import React, { Component } from 'react';
import './Feedback.css';
import feed_card1 from '../Assets/Img/folderDesign.svg';

const Feedback = (props) => {
    return (
    <>
            <div className='feed_card'>
                <img src={feed_card1} alt='feed_card1' className='folder_img' />
                <div className='feed_details_div'>
                    <div className='feed_details_div1'>
                        <img src={props.Img} alt='user_feed_img'  className='user_feed_img'/>
                        <p className='user_feed_no_task'>{props.numberTask}</p>
                    </div>

                    <div className='details_feed'>
                        <div className='name-rate-div'>
                            <p className='name-feed'>{props.name}</p>
                            <p>{props.numberRate}</p>
                        </div>
                        <div className='name-rate-div2'>
                            <p>{props.age}</p>
                            <img src={props.rate} alt='rate' className='rate' />
                        </div>

                        <div className='type-feed-div'>
                            <p>{props.feed}</p>
                        </div>
                    </div>
                </div>
            </div>
        
    </> 
    );
}
 
export default Feedback;