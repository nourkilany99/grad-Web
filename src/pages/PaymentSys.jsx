import React, { Component } from 'react';
import './PaymentSys.css';
import Headers from '../common/Headers';
import Cardsol from '../common/Card_sol';
import icon from '../Assets/Img/done_icon.svg';
import DownloadTag from '../common/DownloadTag';
import GreenDiv2 from '../common/GreenDiv2';
import sticker from '../Assets/Img/how_stick1.svg';
import PaymentProcess from '../component/PaymentProcess';
import Footer from '../common/Footer';

const PaymentSys = () => {
    return ( 
        <>
        <section className='s1_pay'>
        <div className='s1_pay_d1'>
            <Headers header='Payment System' />
            <p>Protected Transactions from Start to Finish</p>
        </div>

        <div className='s1_pay_d2'>
            <div className='s1_pay_d2_p_d'>
            <p className='s1_pay_d2_p'>Escrow Model Explanation</p>
            </div>
            <div  className='s1_payment_cards'>
                <Cardsol width='28%' bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol  width='28%' bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
                <Cardsol  width='28%' bgColor="#FFECF5" icon={icon} p='Earn money through flexible local tasks' />
            </div>
        </div>
        </section>

        <DownloadTag />

        <GreenDiv2 margin="0" width='20vw' padding='0 0 0 10%' sticker={sticker} li1='All users are verified before access' li2='No anonymous accounts' li3='Secure in-app messaging only' li4='Payments secured before work begins' li5='Report issues instantly if needed' />

        <section className='s2_pay'>

            <PaymentProcess />
       
        </section>
        <Footer />
        </>
     );
}
 
export default PaymentSys;