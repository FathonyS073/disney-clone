import React from 'react'

//Picture
import marvel from './../assets/Picture/marvel.png'
import disney from './../assets/Picture/disney.png'
import nationalg from './../assets/Picture/nationalG.png'
import pixar from './../assets/Picture/pixar.png'
import starwar from './../assets/Picture/starwar.png'

//Videos
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalgV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import starwarV from './../assets/Videos/star-wars.mp4'



function ProductionHouse() {
    const productonHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalg,
            video:nationalgV
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:5,
            image:starwar,
            video:starwarV
        }
    ]


  return (
    <div className="flex gap-3 md:gap-5 px-5 md:px-16 w-full mb-10">
  {productonHouseList.map((item, index) => (
    <div key={index} className="relative border-[2px] border-gray-600 
        rounded-lg hover:scale-110 duration-300 transition-all ease-in-out 
        cursor-pointer overflow-hidden">
      
      {/* Gambar */}
      <img 
        src={item.image} 
        className="w-full transition-opacity duration-300"
      />

      {/* Video */}
      <video 
        src={item.video} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rounded-md opacity-0 transition-opacity duration-300 hover:opacity-50"
      />
    </div>
  ))}
</div>

  )
}

export default ProductionHouse