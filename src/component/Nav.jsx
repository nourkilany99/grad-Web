import React, { useEffect, useRef, useState } from 'react';
import logo from '../Assets/Img/WhiteLogo.svg';
import './Nav.css';
import { supabase } from '../Supabase';
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';


// ✅ Reusable Dropdown
function Dropdown({ label, links }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="dropdown_div" ref={dropdownRef}>
      <div className="dropdown_header label_nav " onClick={() => setOpen(!open)}>
        <p className='label_nav a'>{label}</p>
        <span className={`arrow ${open ? "rotate" : ""}`}>▾</span>
      </div>

      {open && (
        <div className="dropdown_menu a">
          {links.map((item, index) => (
            <Link className='label_nav a2' key={index} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


// ✅ Main Nav
const Nav = () => { 
  const [loading, setLoading] = useState(true);
  const [nav, setnav] = useState([]);
  const [buttons, setbuttons] = useState([]);
  const { lang, setLang } = useLanguage();
  const isArabic = lang === "ar";

  useEffect(() => {
    async function getPageData() {
      const navres = await supabase.from("Nav").select("*");
      const buttonsres = await supabase.from("cta_buttons").select("*");

      setnav(navres.data || []);
      setbuttons(buttonsres.data || []);
      setLoading(false);
    }

    getPageData();
  }, []);

  const getLabel = (item) => {
    if (!item) return "";
    return isArabic ? (item.label_ar || item.label_en) : (item.label_en || item.label_ar);
  };

  if (loading) return <p>Loading....</p>;

  return ( 
    <header className={isArabic ? "arabic-mode" : ""}>

      {/* Logo */}
      
      <div className='logo'>
        <Link  to='/' ><img src={logo} alt='logoWhite' className='logoWhite'/></Link>
        <p className='logo_name'>Eureka</p>
      </div>
      

      {/* Nav */}
      <nav>

        {/* How it works */}
        <Link className='a' to='/How'>
          {
            nav 
            .filter(item => item.id === 3)
            .map(item => (
              <p className='a' key={item.id}>{getLabel(item)}</p>
            ))
          }
        </Link>

        <Link className='a' to='/about'>
          {
            nav 
            .filter(item => item.id === 15)
            .map(item => (
              <p className='a' key={item.id}>{getLabel(item)}</p>
            ))
          }
        </Link>

        {/* ✅ For Users Dropdown */}
        <Dropdown className='a'
          label={getLabel(nav.find(item => item.id === 4))}
          links={
            isArabic
              ? [
                  { label: "للمراهقين", path: "/Teen" },
                  { label: "للآباء", path: "/Parents" },
                  { label: "لأصحاب المهام", path: "/TaskOwner" }
                ]
              : [
                  { label: "For Teens", path: "/Teen" },
                  { label: "For Parents", path: "/Parents" },
                  { label: "For Task Owners", path: "/TaskOwner" }
                ]
          }
        />

        {/* ✅ Verification System Dropdown */}
        <Dropdown className='a'
          label={getLabel(nav.find(item => item.id === 7))}
          links={
            isArabic
              ? [
                  { label: "الأمان والثقة", path: "/safety" },
                  { label: "نظام التحقق", path: "/verify" },
                  { label: "طريقة الدفع", path: "/payment" },
                  { label: "الأسعار", path: "/pricing" },
                  { label: "الشروط والأحكام", path: "/terms" },
                  // { label: "تحقق من الحالة", path: "/verification/status" }
                ]
              : [
                  { label: "safety & trust", path: "/safety" },
                  { label: "Verification system", path: "/verify" },
                  { label: "Payment method", path: "/payment" },
                  { label: "Pricing", path: "/pricing" },
                  { label: "Terms & Conditions", path: "/terms" },
                  // { label: "Check Status", path: "/verification/status" }
                ]
          }
        />

        {/* Features */}
        <Link className='a' to='/features'>
          {
            nav
            .filter(item => item.id === 2)
            .map(item => (
              <p className='a' key={item.id}>{getLabel(item)}</p>
            ))
          }
        </Link>

        {/* ✅ Payment System Dropdown */}
        <Dropdown
          label={getLabel(nav.find(item => item.id === 14))}
          links={
            isArabic
              ? [
                  { label: "تواصل معنا", path: "/contact" },
                  { label: "التقارير", path: "/reports" },
                  { label: "الأسئلة الشائعة", path: "/fqa" }
                ]
              : [
                  { label: "contact", path: "/contact" },
                  { label: "reports", path: "/reports" },
                  { label: "FQA", path: "/fqa" }
                ]
          }
        />

      </nav>

      {/* CTA Button + Language Switch */}
      <div className='cta-download-div'>
        <div className='language-switch'>
          <button
            type='button'
            className={`language-btn ${isArabic ? "active" : ""}`}
            onClick={() => setLang("ar")}
          >
            AR
          </button>
          <button
            type='button'
            className={`language-btn ${!isArabic ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
        <div className='cta-download'>
          {
            buttons
            .filter(item => item.id === 1)
            .map(item => (
              <p key={item.id}>{getLabel(item)}</p>
            ))
          }
        </div>
      </div>

    </header>
  );
};

export default Nav;