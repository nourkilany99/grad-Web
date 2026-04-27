import React, { useEffect, useState } from "react";
import './S3.css';
import { supabase } from '../Supabase';
import How from '../common/How';
import line_green from '../Assets/Img/line.svg';

const Section3 = () => {
  const [how, sethow] = useState([]);

  useEffect(() => {

    async function getPageData() {
      const { data, error } = await supabase
        .from("How_Work")
        .select("*")
        .order("id", { ascending: true });

      if (!error) {
        sethow(data || []);
      }
    }

    getPageData();

    const section = document.querySelector(".s3");
    const track = document.querySelector("#howScroll");

    const handleScroll = () => {
      if (!section || !track) return;

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
          {how.map((item) => (
            <How
              key={item.id}
              Img={item.Img}
              number={item.Number}
              how={item.How}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;