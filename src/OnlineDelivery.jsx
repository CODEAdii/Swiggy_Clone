import React,{useState,useEffect} from 'react'
import Card from './components/Card';



function OnlineDelivery() {
    const [data, setData]=useState([]);
    const fetchTopRestaurant=async()=>{
        const response=await fetch("http://localhost:5000/top-restaurant-chains");
        const apidata = await response.json();
        setData(apidata)
    };

    useEffect(()=>{
        fetchTopRestaurant();
    },[]);
  return (
    <div className=' max-w-[1200px] mx-auto py-2 px-3'>
        <div className='flex my-3 items-center justify-between'>
            <div className='text-[25px] font-bold'>Restaurants with Online Delivery in Kumarpara</div>        
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                data.map(
                    (d,i)=>{
                        return <Card{...d} k={i}/>
                    }
                )
            }
        </div>
    </div>
  )
}

export default OnlineDelivery;