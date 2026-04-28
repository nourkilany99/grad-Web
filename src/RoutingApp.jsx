import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav from './component/Nav';
import Home from './pages/Home';
import About from './pages/About';
import How from './pages/How';
import Teen from './pages/Teens';
import Parents from './pages/Parents';
import TaskOwner from './pages/Taskowner';
import Safety from './pages/Safety';
import Payment from './pages/PaymentSys';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Reports from './pages/Reports';
import Terms from './pages/Terms';
import Faq from './pages/Faq';
import Verify from './pages/Verify';

const AppLayout = () => (
    <>
        <Nav />
        <Outlet />
    </>
);

const RoutinhApp = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/How' element={<How />} />
                    <Route path='/Teen' element={<Teen />} />
                    <Route path='/Parents' element={<Parents />} />
                    <Route path='/TaskOwner' element={<TaskOwner />} />
                    <Route path='/safety' element={<Safety />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/terms' element={<Terms />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/fqa' element={<Faq />} />
                    <Route path='/verify' element={<Verify />} />
                </Route>

            </Routes>

        </BrowserRouter>
        
        
        
        
        </>
     );
}
 
export default RoutinhApp;