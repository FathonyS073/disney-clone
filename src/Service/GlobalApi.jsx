import axios from "axios";

const movieBaseUrl='https://api.themoviedb.org/3';
const api_key="e27a2f466277a57e3adf2dc165bf6b6b";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=e27a2f466277a57e3adf2dc165bf6b6b';

const getTrendingVideos = axios.get(movieBaseUrl + 
    "/trending/all/day?api_key=" + api_key);
    const getMovieGenreId=(id)=>axios.get(movieByGenreBaseURL + '&with_genres=' + id)




export default {
    getTrendingVideos,
    getMovieGenreId
}