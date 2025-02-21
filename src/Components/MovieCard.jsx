import React from 'react'
const imgBaseUrl = 'https://image.tmdb.org/t/p/original';


function MovieCard({movie}) {
  return (
    <>
        <img src={imgBaseUrl + movie.poster_path}
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-200 
        hover:scale-110 transition-all duration-100 ease-in-out' />
    </>
  )
}

export default MovieCard