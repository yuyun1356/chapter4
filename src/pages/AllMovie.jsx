import React, { useEffect, useState } from "react";
import "./allmovie.scss";
import { getMovieList, searchMovie } from "../api";
import { useNavigate } from "react-router-dom";

const AllMovie = () => {
  const navigate = useNavigate();

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie__wrapper" key={i}>
          <div className="movie__title">{movie.title}</div>
          <img
            className="movie__image"
            src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
          />
          <div className="movie__overview">{movie.overview}</div>
          <div className="movie__date">
            <strong>Release :</strong> {movie.release_date}
          </div>
          <div className="movie__rating">
            <strong id="rating_movie">Rating : </strong>
            {movie.vote_average}/10
          </div>
        </div>
      );
    });
  };
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  console.log({ popularMovies: popularMovies });
  return (
    <div className="SearchMovie">
      <button type="submit" id="button_back" onClick={() => navigate("/")}>
        Kembali
      </button>
      <div className="SearchMovie_container">
        <h1>All Movie List</h1>
        <input
          placeholder="what do you want to watch?"
          className="movie__search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie__container">
          <PopularMovieList />
        </div>
      </div>
    </div>
  );
};

export default AllMovie;
