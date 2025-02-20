import React, { useEffect, useState } from 'react'
import GlobalApi from '../Service/GlobalApi'

const imgBaseUrl='https://image.tmdb.org/t/p/original';
function Slider() {
    const [trendingVideos, setTrandingVideos]=useState([]);
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
    <div className='w-full flex overflow-x-auto py-10 px-10'>
        {trendingVideos.map((item)=>(
            <img src={imgBaseUrl+item.backdrop_path} 
            className='min-w-full h-[500px] object-cover object-top mr-5 rounded-lg'/>
        ))}
    </div>
  )
}

export default Slider