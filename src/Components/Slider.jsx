import React, { useEffect, useState } from 'react'
import GloubalApi from '../Service/GlobalApi'
import GlobalApi from '../Service/GlobalApi'

function Slider() {
    const [videoList, setVideoList]=useState([])
    useEffect(()=>{
        getTrendingVideos();
    },[])

    const getTrendingVideos=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results)
            setVideoList(resp.data.results)
        })
    }
  return (
    <div>
        {videoList.map}
    </div>
  )
}

export default Slider