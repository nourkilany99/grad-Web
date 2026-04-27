import React, { useEffect, useRef, useState } from 'react';
import logo from '../Assets/Img/WhiteLogo.svg';
import './Nav.css';
import { supabase } from '../Supabase';
import { Link, useLocation } from "react-router-dom";


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

  if (loading) return <p>Loading....</p>;

  return ( 
    <header >

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
              <p className='a' key={item.id}>{item.label_en}</p>
            ))
          }
        </Link>

        {/* ✅ For Users Dropdown */}
        <Dropdown className='a'
          label={nav.find(item => item.id === 4)?.label_en}
          links={[
            { label: "For Teens", path: "/Teen" },
            { label: "For Parents", path: "/Parents" },
            { label: "For Task Owners", path: "/TaskOwner" }
          ]}
        />

        {/* ✅ Verification System Dropdown */}
        <Dropdown className='a'
          label={nav.find(item => item.id === 7)?.label_en}
          links={[
            { label: "Verification system", path: "/safety" },
            { label: "Payment method", path: "/payment" },
            // { label: "Check Status", path: "/verification/status" }
          ]}
        />

        {/* Features */}
        <Link className='a' to='/features'>
          {
            nav
            .filter(item => item.id === 2)
            .map(item => (
              <p className='a' key={item.id}>{item.label_en}</p>
            ))
          }
        </Link>

        {/* ✅ Payment System Dropdown */}
        <Dropdown
          label={nav.find(item => item.id === 14)?.label_en}
          links={[
            { label: "contact", path: "/contact" },
            { label: "reports", path: "/About" },
            { label: "FQA", path: "/How" }
          ]}
        />

      </nav>

      {/* CTA Button */}
      <div className='cta-download-div'>
        <div className='cta-download'>
          {
            buttons
            .filter(item => item.id === 1)
            .map(item => (
              <p key={item.id}>{item.label_en}</p>
            ))
          }
        </div>
      </div>

    </header>
  );
};

export default Nav;