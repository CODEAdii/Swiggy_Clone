import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";




const Category = () => {
    const [categories,setCategory]=useState([]);

    const fetchCategory=async()=>{
            const response=await fetch("http://localhost:5000/categories");
            const data = await response.json();
            setCategory(data);
    }

    useEffect( 
        () =>{
        fetchCategory();
    })
  return (
     <div className=' max-w-[1200px] mx-auto '>
        <div className='flex my-3 items-center justify-between'>
            <div className='text-[25px] font-bold'>What's on your mind?</div>
            <div className='flex '>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'><FaArrowRight/></div>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'><FaArrowLeft/></div>

            </div>
        </div>
        <div className='flex border border-red-500 overflow-hidden'>
            {
                categories.map(
                    (cat,index)=>{
                        return(
                            <div key={index} className='w-[150px] shrink-0'>
                                <img src={"http://localhost:5000/images/"+ cat.image} alt=""/>
                            </div>
                        )    
                    }
                )
            }
        </div>
     </div>
     )    
}

export default Category