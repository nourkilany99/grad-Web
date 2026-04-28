import React, { useMemo, useState } from 'react';
import './Faq.css';
import Footer from '../common/Footer';
import pinkLine from '../Assets/Img/pink_line.svg';

const faqData = {
    Teens: [
        {
            question: 'Can teens really earn money on the platform?',
            answer: 'Yes. Teens can apply to verified local tasks, complete work, and receive protected payouts once tasks are approved.'
        },
        {
            question: 'What types of tasks can I do?',
            answer: 'Tasks include delivery support, simple digital work, tutoring help, and neighborhood assistance depending on your skills.'
        },
        {
            question: 'Do I need verification to join?',
            answer: 'Yes, identity verification is required before full platform access to keep all participants safe and accountable.'
        }
    ],
    Parents: [
        {
            question: 'How do I post a task?',
            answer: 'Create a task from your dashboard, set budget and deadline, then publish for eligible teens to apply.'
        },
        {
            question: 'How are applicants selected?',
            answer: 'You review profile history, verification status, and ratings before accepting the best applicant.'
        },
        {
            question: 'Can I cancel a task?',
            answer: 'Yes, cancellations are supported according to task stage and payout state with clear policy handling.'
        }
    ],
    'Task Owners': [
        {
            question: 'How does payment protection work?',
            answer: 'Funds are held securely before work starts and are only released after completion confirmation.'
        },
        {
            question: 'Can I contact applicants safely?',
            answer: 'All communication stays in secure in-app chat with moderation tools and full conversation history.'
        },
        {
            question: 'Are disputes supported?',
            answer: 'Yes, you can file disputes directly inside task details where records and decisions are tracked.'
        }
    ]
};

const Faq = () => {
    const [activeTab, setActiveTab] = useState('Teens');
    const [openIndex, setOpenIndex] = useState(0);
    const list = useMemo(() => faqData[activeTab], [activeTab]);

    return (
        <>
            <section className='faq-page'>
                <div className='faq-container'>
                    <div className='faq-hero'>
                        <h1>Frequently Asked Questions</h1>
                        <img src={pinkLine} alt='decor_line' />
                        <p>The FAQ page answers the most common questions about tasks, safety, payments, and platform usage.</p>
                    </div>

                    <div className='faq-tabs'>
                        {Object.keys(faqData).map((tab) => (
                            <button
                                type='button'
                                key={tab}
                                className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenIndex(0);
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className='faq-list'>
                        {list.map((item, idx) => (
                            <article className='faq-item' key={item.question}>
                                <button type='button' className='faq-question' onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}>
                                    <span>{item.question}</span>
                                    <span className={`faq-arrow ${idx === openIndex ? 'open' : ''}`}>›</span>
                                </button>
                                {idx === openIndex && <p className='faq-answer'>{item.answer}</p>}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Faq;
