// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

//Props
//numberOfSlide

//Carousel => numberOfSlide = 1 => hien thi 1 Slide
//Carousel => numberOfSlide = 6 => hien thi 6 Slide

export default function Carousel({
  numberOfSlide,
  category,
  autoplay = false,
}) {
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const response = await axios.get(
      "https://67038f65ab8a8f8927309fc3.mockapi.io/movie"
    );
    setMovies(response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={numberOfSlide}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={autoplay ? [Pagination, Autoplay] : [Pagination]}
        className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}
      >
        {/* movie => SwiperSlide */}
        {movies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <img alt="image error" src={movie.poster_path} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
