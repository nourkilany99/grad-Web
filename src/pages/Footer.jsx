import React from 'react';
import './Footer.css';
import downloadIcon from '../Assets/Img/downloadIcon.svg';

const footerColumns = [
  {
    title: 'Safety',
    links: [
      'Safety & Trust',
      'Verification System',
      'Reports & Disputes',
      'Community Guidelines',
    ],
  },
  {
    title: 'Platform',
    links: ['How It Works', 'Pricing', 'For Teens', 'For Parents', 'For Task Owners'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Contact & Support', 'Help Center'],
  },
];

const socialItems = ['IG', 'DB', 'X', 'IN'];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h2 className="footer-title">LOOKING FOR A GIG WORK</h2>
          <button type="button" className="footer-download-btn">
            <img src={downloadIcon} alt="download icon" className="footer-download-icon" />
            <span>Download app</span>
          </button>
        </div>

        <div className="footer-card">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <p key={link}>{link}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-graphic footer-graphic-main" />
          <div className="footer-graphic footer-graphic-accent" />
        </div>

        <div className="footer-brand">EUREKA</div>

        <div className="footer-bottom-right">
          <p className="footer-social-label">Social</p>
          <div className="footer-social-icons">
            {socialItems.map((item) => (
              <span key={item} className="footer-social-icon">
                {item}
              </span>
            ))}
          </div>
          <div className="footer-policies">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
