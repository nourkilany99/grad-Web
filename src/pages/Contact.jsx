import React, { Component } from 'react';
import './Contact.css';
import pink_line from '../Assets/Img/decor_line_about.svg';
import chatIcon from '../Assets/Img/chatIcon.svg';
import callIcon from '../Assets/Img/callIcon.svg';
import fqaIcon from '../Assets/Img/fqaIcon.svg';


const Contact = () => {
    return ( 
        <>
        <section className='s1_safe'>
        <div className='contact_hero'>
            <p className='contact_p'>Contact</p>
            <p className='and_hero2'>&</p>
            <p className='support_p'>Support</p>
        </div>

        <div className='pink_d_contact'>
        <img src={pink_line} alt='pink_line' className='pink_line_contact' />
        </div>

        <div className='contact_long_p_hero'>
            <p>The Contact & Support page provides users with direct ways to reach the support team, access help resources, and report urgent issues. It ensures that teens, parents, and task owners can quickly resolve problems and receive assistance whenever needed.</p>
        </div>
        </section>

        <section className='s2_contact' >
            <div className='s2_contact_info1'>
                <div className='s2_chat_info1'>
                    <div className='s2_chat_title'>
                    <img src={chatIcon} alt='' className='chatIcon' />
                    <p>Chat with us</p>
                    </div>

                    <p className='Iconp1'>Our friendly team is up here with you 24/7</p>
                    <p className='Iconp2'>support@eurekaapp.com</p>
                </div>

                <div className='s2_chat_info1'>
                    <div className='s2_chat_title'>
                    <img src={callIcon} alt='' className='chatIcon' />
                    <p>Call us</p>
                    </div>

                    <p className='Iconp1'>Sun-Mon from 8am to 8pm</p>
                    <p className='Iconp2'>01000110754</p>
                </div>

                <div className='s2_fqa_title'>
                    <img src={fqaIcon} alt='' />
                    <p>FAQ sections</p>
                </div>
            </div>
            <div className='form'>
            <div className='contact_form_wrap'>
                <p className='contact_form_title'>Wanna share a thought?</p>
                <p className='contact_form_subtitle'>Tell us more about you and your thoughts</p>

                <form className='contact_form'>
                    <div className='contact_form_row'>
                        <input type='text' placeholder='First name' />
                        <input type='text' placeholder='Last name' />
                    </div>

                    <input type='email' placeholder='Email Address' className='contact_input_full' />

                    <label className='contact_label'>User Type</label>
                    <select defaultValue='Teen' className='contact_user_type'>
                        <option value='Teen'>Teen</option>
                        <option value='Parent'>Parent</option>
                        <option value='Task Owner'>Task Owner</option>
                    </select>

                    <input type='text' placeholder='Subject' className='contact_input_full' />
                    <textarea placeholder='Message' className='contact_message' rows='3'></textarea>

                    <button type='submit' className='contact_submit'>Submit</button>
                </form>
            </div>
            </div>
        </section>


        </>
     );
}
 
export default Contact;