import React from 'react';
import './Terms.css';
import Footer from '../common/Footer';
import pinkLine from '../Assets/Img/decor_line_about.svg';

const termsSections = [
    {
        title: '1. Terms of Service',
        items: [
            'Acceptance of Terms: By creating an account or using Eureka, users agree to comply with all platform rules, policies, and procedures.',
            'Eligibility: Users must meet minimum age requirements and complete identity verification.',
            'Platform Role: Eureka acts as an intermediary platform facilitating task agreements and secure payments.',
            'User Responsibilities: Provide accurate information, communicate respectfully, and follow all safety procedures.'
        ]
    },
    {
        title: '2. Privacy Policy',
        items: [
            'Data Collection: Identity verification data, contact information, transaction records, and moderation logs.',
            'Purpose of Data Use: Verify identity, secure transactions, resolve disputes, and improve platform performance.',
            'Data Protection: Encrypted storage, restricted admin access, and secure database architecture.',
            'Data Retention: Verification and transaction records are stored according to compliance and dispute-resolution needs.'
        ]
    }
];

const Terms = () => {
    return (
        <>
            <section className='terms-page'>
                <div className='terms-container'>
                    <div className='terms-hero'>
                        <h1>Terms of Service</h1>
                        <img src={pinkLine} alt='decor_line' />
                        <p>By creating an account or using Eureka, users agree to comply with all platform rules, policies, and procedures.</p>
                    </div>

                    {termsSections.map((section) => (
                        <article className='terms-card' key={section.title}>
                            <p className='terms-pill'>{section.title}</p>
                            <ul>
                                {section.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Terms;
