import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTBkOGY2NDFlZTZjNjM3MjYxNjViZTZkZmRhNzE3MiIsInN1YiI6IjY2MjY3MWVlMjIxYmE2MDE2MzE0MGExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mMx-TFpCsCj-fRmkPnVFCizZMf8q7ngVsi2Zys5Qarc'; 


export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};


export const searchMovies = async (query) => {
    try {
        const response = await axios.get(
            'https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    query: query
                },
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};


export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null; 
    }
};


export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.cast;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        return [];
    }
};


export const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3//movie/${movieId}/reviews`,
            {
        
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.results;
    } catch (error) {
          console.error('Error fetching movie reviews:', error);
        return [];
    }
};