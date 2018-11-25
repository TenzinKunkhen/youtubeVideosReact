import axios from 'axios';
const KEY = 'AIzaSyAybWY2Ci1ak31e88ufxw8PL7zJyKIEPkw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});