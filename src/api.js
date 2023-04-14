import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_KEY
const baseUrl = process.env.REACT_APP_BASE_URL

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}