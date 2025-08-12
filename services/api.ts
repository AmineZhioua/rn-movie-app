interface Movie {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number,
    vote_count: number,
    release_date: string
    runtime: string,
    overview: string,
    genres: Array<string>,
    production_companies: Array<string>,
    budget: number,
    revenue: number
}

export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_TMDB_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_KEY}`
    }
};


export const fetchMovies = async({ query }: { query: string }) => {
    const url = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
            : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const fetchResponse = await fetch(url, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    if(!fetchResponse.ok) {
        throw new Error('Failed to fetch movies');
    }

    const data = await fetchResponse.json();
    return data.results;
};


export const fetchMovieDetails = async(movieId: string): Promise<Movie> => {
    try {
        const url = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`;
        const fetchResponse = await fetch(url, {
            method: 'GET',
            headers: TMDB_CONFIG.headers
        });

        if (!fetchResponse.ok) {
            throw new Error('Failed to fetch movie details');
        }

        const data = await fetchResponse.json();
        return data as Movie;
    } catch(error) {
        console.error(error);
        throw error;
    }
}