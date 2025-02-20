import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Service/GlobalApi'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";


const imgBaseUrl='https://image.tmdb.org/t/p/original';
function Slider() {
    
    const [trendingVideos, setTrandingVideos]=useState([]);
    
    const elementRef=useRef(); 

    const sliderRight=(element)=>{
        element.scrollLeft+=1480
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=1480
    }

    useEffect(() => {
        getTrendingVideos();
        
    })

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setTrandingVideos(resp.data.results);
        })
    }
  return (
    <>
        <div>
            <HiChevronLeft 
            className='hidden md:block text-white text-[30px]
            absolute mx-10 left-0 top-1/2 cursor-pointer ' 
            onClick={()=>sliderLeft(elementRef.current)}
            />
            <HiChevronRight 
            className='hidden md:block text-white text-[30px] 
            absolute mx-10 right-0 top-1/2 cursor-pointer'
            onClick={()=>sliderRight(elementRef.current)}
            />
        </div>
        <div 
        className='w-full flex overflow-x-auto py-10 px-10 scrollbar-hide scroll-smooth'
        ref={elementRef}
        >
            {trendingVideos.map((item)=>(
                <img key={item.id}
                src={imgBaseUrl+item.backdrop_path} 
                className='min-w-full md:h-[450px] object-cover object-top mr-5 rounded-lg hover:border-[4px] border-gray-200 transition-all duration-100 ease-out'/>
            ))}
    </div>
    </>
  )
}

export default Slider