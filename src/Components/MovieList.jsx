import React, { useEffect, useState } from 'react'
import GlobalApi from '../Service/GlobalApi'
import MovieCard from './MovieCard';
const imgBaseUrl = 'https://image.tmdb.org/t/p/original';


function MovieList({genreId}) {

    const [movieList, setMovieList] = useState([]);
    
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId =()=>{
        GlobalApi.getMovieGenreId(genreId).then(
            resp=>{
                // console.log(resp.data.results);
                setMovieList(resp.data.results);
            }
        )
    }
  return (
    <div className='flex overflow-auto gap-8 scrollbar-hide pt-5 px-3 pb-10'>
        {movieList.map((item,index)=>(
            <MovieCard movie={item}/> 
        ))}
    </div>
  )
}

export default MovieList