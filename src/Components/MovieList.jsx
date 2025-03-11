import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Service/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

const imgBaseUrl = 'https://image.tmdb.org/t/p/original';

function MovieList({ genreId, index_ }) {
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

    // const slideLeft = () => {
    //     if (elementRef.current) {
    //         elementRef.current.scrollBy({ left: -500, behavior: "smooth" });
    //     }
    // };
    
    // const slideRight = () => {
    //     if (elementRef.current) {
    //         elementRef.current.scrollBy({ left: 500, behavior: "smooth" });
    //     }
    // };
    const smoothScroll = (direction) => {
        let start = elementRef.current.scrollLeft;
        let end = direction === "left" ? start - 500 : start + 500;
        let startTime = null;
    
        const animateScroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let easeInOut = Math.min(progress / 300, 1); // 300ms animation
            elementRef.current.scrollLeft = start + (end - start) * easeInOut;
    
            if (progress < 300) {
                requestAnimationFrame(animateScroll);
            }
        };
    
        requestAnimationFrame(animateScroll);
    };
    
    const slideLeft = () => smoothScroll("left");
    const slideRight = () => smoothScroll("right");
    

    return (
        <div className="relative">
            {/* Tombol Panah Kiri */}
            <IoChevronBackOutline 
                onClick={slideLeft}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute left-0 ${index_%3==0? 'mt-[100px]' : 'mt-[150px]'} transform -translate-y-1/2`}
            />

            {/* Container Movie List */}
            <div ref={elementRef} className="flex overflow-x-scroll gap-8 scrollbar-hide pt-5 px-3 md:pb-5 scroll-smooth">
                {movieList.map((item, index) => (
                    <>
                {index_%3==0? <HrMovieCard movie={item}/> : <MovieCard key={index} movie={item}/>}
                    </>
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
