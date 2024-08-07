import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";






const Header = () => {
    const [toggle,setToggle]=useState(false);

    const showSideMenu=()=>{
        setToggle(true);
    }
    const hideSideMenu=()=>{
        setToggle(false);
    }

    const links=[
        {
            icon:<CiSearch/>,
            name:"Search"
           
        },{
            icon:<BiSolidOffer/>,
            name:"Offers",
            sup:"New"
        },{
            icon:"",
            name:"Help"
        },{
            icon:<BsCartPlus/>,
            name:"Cart",
            sup:"0"
        }
        ,{
            icon:<VscAccount/>,
            name:"SignIn"
        }
    ]
    
  return (
    <>
     <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu}
      style={{ 
        opacity:toggle ? 1 : 0,
        visibility:toggle ?'visible':'hidden'}}>
            <div onClick={(e)=> {
                e.stopPropagation();
            }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{

                left:toggle? '0%' :'-100% '
            }}>

            </div>

        </div>
        <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
            <div className="max-w-[1200px] mx-auto flex items-center">
                <div className='w-[100px] '>
                    <img src="images/Swiggy_logo.png" alt="" className='w-full' />
                </div>
                <div>
                    <span className='font-bold border-b-[3px] border-[#686b78] '> Kumarpara </span>Guwahati, Assam, India <RxCaretDown fontSize={25} className='inline text-[#fc8019] cursor-pointer' onClick={showSideMenu}/>
                </div>
                <nav className='hidden md:flex list-none gap-10 ml-auto font-bold text-[18px]'>
                    {
                        links.map(
                            (link,index)=>{
                                 return <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                    {link.icon}  
                                    {link.name}
                                    <sup>{link.sup}</sup>
                                </li>
                            }
                        )
                    }            
                </nav>
            </div> 
        </header>
     
    </>
    )
  
}

export default Header