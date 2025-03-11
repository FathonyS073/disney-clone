import React from 'react'
const imgBaseUrl = 'https://image.tmdb.org/t/p/original';


function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-100 ease-in-out'>
    <img src={imgBaseUrl + movie.backdrop_path}
    className='w-[110px] md:w-[300px] rounded-lg
    hover:border-[3px] border-gray-200 '/>
    <h2 className='w-[110px] md:w-[300px] text-white mt-2'>
        {movie.title}</h2>
    </section>
  )
}

export default HrMovieCard