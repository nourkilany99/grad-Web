import React, { useEffect, useState } from "react";
import './S3.css';
import { supabase } from '../Supabase';
import How from '../common/How';
import line_green from '../Assets/Img/line.svg'

const Section3 = () => {
  const [how, sethow] = useState([]);

  useEffect(() => {

    async function getPageData(){
      const howres = await supabase.from("How_Work").select("*");
      sethow(howres.data);
    }

    getPageData(); // ✅ CALL IT HERE

    const section = document.querySelector(".s3");
    const track = document.querySelector("#howScroll");

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top;

      const maxScroll = section.offsetHeight - window.innerHeight;
      const scrollPercent = scrollProgress / maxScroll;

      const maxTranslate = track.scrollWidth - window.innerWidth;

      track.style.transform = `translateX(-${scrollPercent * maxTranslate}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <section className='s3'>
      <div className='sticky'>
        <div className='s3_hero'>
          <p>How It works</p>
          <img src={line_green} alt="line_green" />
        </div>

        <div className='how_cntnt' id="howScroll">
          {
            how
            .filter(how => how.id === 1)
            .map((how)=>{
            return  <>
            <How Img={how.Img} number={how.Number} how={how.How}/>
            </>
            })
          }

          {
            how
            .filter(how => how.id === 2)
            .map((how)=>{
            return  <>
            <How Img={how.Img} number={how.Number} how={how.How}/>
            </>
            })
          }

          {
            how
            .filter(how => how.id === 1)
            .map((how)=>{
            return  <>
            <How Img={how.Img} number={how.Number} how={how.How}/>
            </>
            })
          }

          {
            how
            .filter(how => how.id === 1)
            .map((how)=>{
            return  <>
            <How Img={how.Img} number={how.Number} how={how.How}/>
            </>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Section3;