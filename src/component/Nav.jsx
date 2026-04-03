import React, {useEffect, useState } from 'react';
import logo from '../Assets/Img/WhiteLogo.svg';
import './Nav.css';
import { supabase } from '../Supabase';

const Nav = () => { 
    const [loading, setLoading] = useState(true);
    const [nav,setnav] = useState("");
    const [icons,seticons] = useState("");
    const [buttons,setbuttons] = useState("");
    

    useEffect(()=>{
    
            async function getPageData(){
            const navres = await supabase.from("Nav").select("*");
            const iconsres = await supabase.from("icons").select("*");
            const buttonsres = await supabase.from("cta_buttons").select("*");
        
            setnav(navres.data);
            seticons(iconsres.data);
            setbuttons(buttonsres.data);
            setLoading(false);
            }
            
            getPageData()
    
            },[])

            if (loading) return <p>Loading....</p>;
    




    return ( 
        <>

        <header>

            <div className='logo'>
            <img src={logo} alt='logoWhite' className='logoWhite'/>
            <p className='logo_name'>Eureka</p>
            </div>

            <nav>
                {
                nav
                .filter(nav => nav.id === 3)
                .map((nav)=>{
                return  <>
                <p>{nav.label_en}</p>
                </>
                })
                }
                

                <div className='dropdown_div'>

                {
                nav
                .filter(nav => nav.id === 4)
                .map((nav)=>{
                return  <>
                <p>{nav.label_en}</p>
                </>
                })
                }

                {
                icons
                .filter(icons => icons.id === 1)
                .map((icons)=>{
                return  <>
                <img src={icons.icons} alt='down_arrow'/>
                </>
                })
                }
                
                </div>

                <div className='dropdown_div'>
                {
                nav
                .filter(nav => nav.id === 7)
                .map((nav)=>{
                return  <>
                <p>{nav.label_en}</p>
                </>
                })
                }
                
                {
                icons
                .filter(icons => icons.id === 1)
                .map((icons)=>{
                return  <>
                <img src={icons.icons} alt='down_arrow'/>
                </>
                })
                }
                </div>

                {
                nav
                .filter(nav => nav.id === 2)
                .map((nav)=>{
                return  <>
                <p>{nav.label_en}</p>
                </>
                })
                }

                {
                nav
                .filter(nav => nav.id === 13)
                .map((nav)=>{
                return  <>
                <p>{nav.label_en}</p>
                </>
                })
                }

                <div className='dropdown_div'>
                {
                nav
                .filter(nav => nav.id === 14)
                .map((nav)=>{
                return  <>
                <p>{nav.label_en}</p>
                </>
                })
                }
                
                {
                icons
                .filter(icons => icons.id === 1)
                .map((icons)=>{
                return  <>
                <img src={icons.icons} alt='down_arrow'/>
                </>
                })
                }
                </div>

            </nav>

            <div className='cta-download-div'>
                <div className='cta-download'>
                {
                buttons
                .filter(buttons => buttons.id === 1)
                .map((buttons)=>{
                return  <>
                <p>{buttons.label_en}</p>
                </>
                })
                }
                </div>
            </div>

        </header>
        

        </>
     );
}
 
export default Nav;