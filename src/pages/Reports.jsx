import React from 'react';
import './Reports.css';
import Footer from '../common/Footer';
import { LineChart, Line, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const statCards = [
    { title: 'Tasks Completed', value: '2,847', growth: '+12.5%', icon: '✓' },
    { title: 'Performance Score', value: '94.2', growth: '+8.1%', icon: '↗' },
    { title: 'Earnings', value: '$12,485', growth: '+23.4%', icon: '$' },
    { title: 'Active Days', value: '142', growth: '+5.2%', icon: '✓' }
];

const weeklyData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 78 },
    { day: 'Wed', value: 82 },
    { day: 'Thu', value: 70 },
    { day: 'Fri', value: 88 },
    { day: 'Sat', value: 93 },
    { day: 'Sun', value: 74 }
];

const categories = [
    { name: 'Delivery', value: 38, color: '#7b4dff' },
    { name: 'Tech', value: 24, color: '#eb4aac' },
    { name: 'Home', value: 18, color: '#22b8d9' },
    { name: 'Other', value: 20, color: '#f0a31a' }
];

const monthlyData = [
    { month: 'Jan', tasks: 120, earnings: 1800 },
    { month: 'Feb', tasks: 180, earnings: 2400 },
    { month: 'Mar', tasks: 210, earnings: 2800 },
    { month: 'Apr', tasks: 195, earnings: 2550 },
    { month: 'May', tasks: 245, earnings: 3200 },
    { month: 'Jun', tasks: 260, earnings: 3500 }
];

const activity = [
    { title: 'Website Redesign', time: '2 hours ago', price: '$450', status: 'Completed' },
    { title: 'Mobile App UI', time: '3 hours ago', price: '$320', status: 'In Progress' },
    { title: 'Brand Identity', time: '1 day ago', price: '$680', status: 'Completed' },
    { title: 'API Integration', time: '2 days ago', price: '$540', status: 'Completed' }
];

const Reports = () => {
    return (
        <>
            <section className='reports-page'>
                <div className='reports-container'>
                    <div className='reports-header'>
                        <h1>Insights &amp; Reports</h1>
                        <p>Track your performance and earnings</p>
                    </div>

                    <div className='stats-grid'>
                        {statCards.map((card) => (
                            <article key={card.title} className='stats-card'>
                                <span className='stats-icon'>{card.icon}</span>
                                <p className='stats-growth'>{card.growth}</p>
                                <h3>{card.value}</h3>
                                <p>{card.title}</p>
                            </article>
                        ))}
                    </div>

                    <div className='chart-card'>
                        <h3>Weekly Progress</h3>
                        <ResponsiveContainer width='100%' height={250}>
                            <LineChart data={weeklyData}>
                                <CartesianGrid stroke='#2f3139' strokeDasharray='3 3' />
                                <XAxis dataKey='day' stroke='#8f94a3' />
                                <YAxis stroke='#8f94a3' />
                                <Tooltip />
                                <Line type='monotone' dataKey='value' stroke='#8d41ff' strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='chart-card'>
                        <h3>Task Categories</h3>
                        <ResponsiveContainer width='100%' height={250}>
                            <PieChart>
                                <Pie data={categories} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80}>
                                    {categories.map((entry) => (
                                        <Cell key={entry.name} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='chart-card'>
                        <h3>Monthly Activity &amp; Earnings</h3>
                        <ResponsiveContainer width='100%' height={280}>
                            <BarChart data={monthlyData}>
                                <CartesianGrid stroke='#2f3139' strokeDasharray='3 3' />
                                <XAxis dataKey='month' stroke='#8f94a3' />
                                <YAxis stroke='#8f94a3' />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey='tasks' fill='#7b4dff' radius={[6, 6, 0, 0]} />
                                <Bar dataKey='earnings' fill='#eb4aac' radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='activity-card'>
                        <h3>Recent Activity</h3>
                        <div className='activity-list'>
                            {activity.map((item) => (
                                <div className='activity-row' key={item.title}>
                                    <div>
                                        <p className='activity-title'>{item.title}</p>
                                        <p className='activity-time'>{item.time}</p>
                                    </div>
                                    <div className='activity-meta'>
                                        <p className='activity-price'>{item.price}</p>
                                        <p className={`activity-status ${item.status === 'Completed' ? 'done' : 'progress'}`}>{item.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Reports;
