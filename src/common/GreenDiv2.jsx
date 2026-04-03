import React, { Component } from 'react';
import './GreenDiv.css';
import TitleWhite from '../common/TitleWhite';
import Why from '../common/Why';
import sticker from '../Assets/Img/lock.svg';
import TempCard from '../common/TempCard';

const GreenDiv = () => {
    return ( 
        <>
        <div className='green_div'>
            <TitleWhite title='Core Values' />
            <div className='tempcards'>
            <TempCard bgColor=' rgb(248, 230, 234)' header='1. Safety First' sticker={sticker} head2="Protection is the foundation of every system feature." />
            <TempCard bgColor=' rgb(248, 230, 234)' header='2. Transparency' sticker={sticker} head2="Clear payments, visible ratings, defined processes." />
            <TempCard bgColor=' rgb(248, 230, 234)' header='3.Opportunity with Structure' sticker={sticker} head2="Independence should exist within safe boundaries." />
            </div>
        </div>
        </>
     );
}
 
export default GreenDiv;