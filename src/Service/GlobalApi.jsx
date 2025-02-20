import axios from "axios";

const movieBaseUrl='https://api.themoviedb.org/3';
const api_key="e27a2f466277a57e3adf2dc165bf6b6b";

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);



export default {
    getTrendingVideos
}