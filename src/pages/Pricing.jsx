import React from 'react';
import './Pricing.css';
import Footer from '../common/Footer';

const plans = [
    {
        name: 'Basic',
        price: '$9',
        subtitle: 'Perfect for individuals getting started',
        features: ['Up to 100 tasks per month', 'Basic analytics', 'Email support', 'Mobile app access'],
        disabled: ['Priority support', 'Advanced reporting', 'Team collaboration', 'API access']
    },
    {
        name: 'Pro',
        price: '$29',
        subtitle: 'Best for growing professionals',
        features: ['Unlimited tasks', 'Advanced analytics', 'Priority support', 'Mobile app access', 'Advanced reporting', 'Team collaboration (up to 5)', 'Custom integrations'],
        disabled: ['API access']
    },
    {
        name: 'Premium',
        price: '$79',
        subtitle: 'For teams and power users',
        features: ['Unlimited everything', 'Real-time analytics', '24/7 dedicated support', 'Mobile app access', 'White-label reports', 'Unlimited team members', 'Custom integrations', 'Full API access'],
        disabled: []
    }
];

const comparisonRows = [
    { name: 'Task limit', basic: '100/mo', pro: 'Unlimited', premium: 'Unlimited' },
    { name: 'Analytics dashboard', basic: true, pro: true, premium: true },
    { name: 'Support level', basic: true, pro: true, premium: true },
    { name: 'Team members', basic: false, pro: true, premium: true },
    { name: 'Custom integrations', basic: false, pro: true, premium: true },
    { name: 'API access', basic: false, pro: true, premium: true },
    { name: 'White-label reports', basic: false, pro: false, premium: true }
];

const CellValue = ({ value }) => {
    if (typeof value === 'boolean') {
        return <span className={value ? 'check' : 'cross'}>{value ? '✓' : '✕'}</span>;
    }

    return <span className='text-value'>{value}</span>;
};

const Pricing = () => {
    return (
        <>
            <section className='pricing-page'>
                <div className='pricing-container'>
                    <div className='pricing-hero'>
                        <h1>Choose Your Plan</h1>
                        <p>Start free, upgrade when you need</p>
                        <div className='billing-toggle'>
                            <span>Monthly</span>
                            <button type='button' className='toggle-ui'>
                                <span />
                            </button>
                            <span>Yearly</span>
                        </div>
                    </div>

                    <div className='pricing-grid'>
                        {plans.map((plan) => (
                            <article key={plan.name} className={`plan-card ${plan.name === 'Pro' ? 'plan-card-pro' : ''}`}>
                                {plan.name === 'Pro' && <p className='popular-badge'>Most Popular</p>}
                                <h3>{plan.name}</h3>
                                <p className='plan-subtitle'>{plan.subtitle}</p>
                                <div className='price-row'>
                                    <span className='price'>{plan.price}</span>
                                    <span className='per-month'>/mo</span>
                                </div>
                                <button type='button' className='plan-btn'>Get Started</button>
                                <ul>
                                    {plan.features.map((feature) => (
                                        <li key={feature} className='enabled'>✓ {feature}</li>
                                    ))}
                                    {plan.disabled.map((feature) => (
                                        <li key={feature} className='disabled'>✕ {feature}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className='comparison-wrap'>
                        <h2>Feature Comparison</h2>
                        <div className='comparison-table'>
                            <div className='comparison-head'>Feature</div>
                            <div className='comparison-head'>Basic</div>
                            <div className='comparison-head'>Pro</div>
                            <div className='comparison-head'>Premium</div>

                            {comparisonRows.map((row) => (
                                <React.Fragment key={row.name}>
                                    <div className='comparison-cell feature'>{row.name}</div>
                                    <div className='comparison-cell'><CellValue value={row.basic} /></div>
                                    <div className='comparison-cell'><CellValue value={row.pro} /></div>
                                    <div className='comparison-cell'><CellValue value={row.premium} /></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Pricing;
