import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";
import "./slider.scss";
import { PlayArrow } from "@mui/icons-material";
const Slider = () => {
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
    <div className="container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies.map((result, index) => {
          return (
            <div className="wrappers" key={index}>
              <SwiperSlide>
                <div className="wrapper">
                  <img
                    src={`${process.env.REACT_APP_IMG_URL}/${result.backdrop_path}`}
                    alt={`${result.title}`}
                  ></img>
                  <div className="info">
                    <span className="title">{result.title}</span>
                    <span className="desc">{result.overview}</span>
                    <div className="buttons">
                      <button className="play">
                        <PlayArrow />
                        <span>WATCH TRAILER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
