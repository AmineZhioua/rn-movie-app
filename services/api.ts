import axios from 'axios';

export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.TMDB_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_KEY}`
    }
};


export const fetchMovies = async({ query }: { query: string }) => {
    const url = query ? `/search/movie?query=${encodeURIComponent(query)}` : "/discover/movie?sort_by=popularity.desc";

    const fetchResponse = await axios.get(`${TMDB_CONFIG.BASE_URL}${url}`, {
        headers: TMDB_CONFIG.headers
    });

    if(fetchResponse.status === 200) {
        console.log("success", fetchResponse.data.response);
    } else {
        console.error(fetchResponse.statusText);
    }
}


const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTRkNGFmNmYzNTdhMDQxMTc3YWM2N2NmOGEzMWE5MyIsIm5iZiI6MTc1NDc2NTcxOS43MzMsInN1YiI6IjY4OTc5OTk3NTc3ODY5NWY5ZmUyNDU4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HTO7OQJwxHci5Dt_Ia76NORGgCPTdZZCDQlRuGmuzaU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));