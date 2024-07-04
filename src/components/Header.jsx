import React from 'react'
import { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";


const Header = () => {
    const [toggle,setToggle]=useState(false);

    const showSideMenu=()=>{
        setToggle(true);
    }
  return (
    <>
     <div className='black-overlay w-full h-full fixed duration-500'
      style={{ 
        opacity:toggle ? 1:0,
        visibility:toggle ?'visible':'hidden'}}>
            <div className='w-[50px] bg-white h-full absolute'
            style={{

                oppacity:toggle? '0%' :'-100% '
            }}>

            </div>

        </div>
        <header className="p-[15px] shadow-xl text-[#686b78]">
            <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
                <div className='w-[100px] '>
                    <img src="images/Swiggy_logo.png" alt="" className='w-full' />
                </div>
                <div>
                    <span className='font-bold border-b-[3px] border-[#686b78] '> Kumarpara </span>Guwahati, Assam, India <RxCaretDown fontSize={25} className='inline text-[#fc8019] cursor-pointer' onClick={showSideMenu}/>
                </div>
            </div> 
        </header>
     
    </>
    )
  
}

export default Header