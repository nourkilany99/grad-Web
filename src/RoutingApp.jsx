import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import How from './pages/How';
import Teen from './pages/Teens';

const RoutinhApp = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/How-It-Works' element={<How />} />
                <Route path='/Teen' element={<Teen />} />

            </Routes>

        </BrowserRouter>
        
        
        
        
        </>
     );
}
 
export default RoutinhApp;