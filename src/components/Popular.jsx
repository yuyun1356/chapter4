import React, { useEffect, useState } from "react";
import "./popular.scss";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { Navigation } from "swiper";
import { useNavigate } from 'react-router-dom'

const Popular = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="popular">
      <div className="popular_container">
        <div className="popular_title">
          <h2>Popular Movies</h2>
          <div className="popular_info">
            <h4 onClick={() => navigate('/searchmovie')}>See All Movie</h4>
            <ArrowForwardRounded />
          </div>
        </div>
        <div className="popular_wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {movies.map((result, index) => {
              return (
                <div className="popular_card" key={index}>
                  <SwiperSlide>
                    <img
                      src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                      alt={`${result.original_title}`}
                    ></img>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popular;
