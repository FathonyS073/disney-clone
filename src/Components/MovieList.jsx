import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Service/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const imgBaseUrl = 'https://image.tmdb.org/t/p/original';

function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieGenreId(genreId).then(resp => {
            setMovieList(resp.data.results);
        });
    };

    const slideLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollBy({ left: -500, behavior: "smooth" });
        }
    };
    
    const slideRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
    };

    return (
        <div className="relative">
            {/* Tombol Panah Kiri */}
            <IoChevronBackOutline 
                onClick={slideLeft}
                className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2"
            />

            {/* Container Movie List */}
            <div ref={elementRef} className="flex overflow-x-scroll gap-8 scrollbar-hide pt-5 px-3 md:pb-5 scroll-smooth">
                {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>

            {/* Tombol Panah Kanan */}
            <IoChevronForwardOutline 
                onClick={slideRight}
                className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2"
            />
        </div>
    );
}

export default MovieList;
