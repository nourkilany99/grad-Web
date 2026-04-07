import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import How from './pages/How';
import Teen from './pages/Teens';
import Parents from './pages/Parents';
import TaskOwner from './pages/Taskowner';
import Safety from './pages/Safety';

const RoutinhApp = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/How' element={<How />} />
                <Route path='/Teen' element={<Teen />} />
                <Route path='/Parents' element={<Parents />} />
                <Route path='/TaskOwner' element={<TaskOwner />} />
                <Route path='/safety' element={<Safety />} />

            </Routes>

        </BrowserRouter>
        
        
        
        
        </>
     );
}
 
export default RoutinhApp;