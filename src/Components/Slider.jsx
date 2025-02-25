import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Service/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const imgBaseUrl = 'https://image.tmdb.org/t/p/original';

function Slider() {
    const [trendingVideos, setTrendingVideos] = useState([]);
    const elementRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgRefs = useRef([]); // Simpan referensi ke setiap gambar

    useEffect(() => {
        getTrendingVideos();
    }, []);

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            setTrendingVideos(resp.data.results);
            imgRefs.current = imgRefs.current.slice(0, resp.data.results.length);
        });
    };

    const handleSlide = (direction) => {
        let newIndex = currentIndex;

        if (direction === 'right' && currentIndex < trendingVideos.length - 1) {
            newIndex += 1;
        } else if (direction === 'left' && currentIndex > 0) {
            newIndex -= 1;
        }

        setCurrentIndex(newIndex);

        // Pastikan elemen terpusat
        imgRefs.current[newIndex]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    };

    return (
        <>
            <div>
                <HiChevronLeft
                    className="hidden md:block text-white text-[30px] absolute mx-10 left-0 top-1/2 cursor-pointer"
                    onClick={() => handleSlide('left')}
                />
                <HiChevronRight
                    className="hidden md:block text-white text-[30px] absolute mx-10 right-0 top-1/2 cursor-pointer"
                    onClick={() => handleSlide('right')}
                />
            </div>
            <div className="w-full flex overflow-x-auto py-7 md:py-10 px-12 scrollbar-hide scroll-smooth" ref={elementRef}>
                {trendingVideos.map((item, index) => (
                    <img
                        key={item.id}
                        ref={(el) => (imgRefs.current[index] = el)}
                        src={imgBaseUrl + item.backdrop_path}
                        className="min-w-full md:h-[450px] object-cover object-top mr-5 rounded-lg hover:border-[4px] border-gray-200 transition-all duration-100 ease-out"
                    />
                ))}
            </div>
        </>
    );
}

export default Slider;
