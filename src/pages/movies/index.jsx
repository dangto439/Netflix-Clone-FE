import axios from "axios";
import "./index.scss";
import { useEffect, useState } from "react";
import Carousel from "../../components/carousel";
import { Col, Row } from "antd";

function Movies() {
  const [dataSource, setDataSource] = useState([]);

  async function fetchMovies() {
    const response = await axios.get(
      "https://67038f65ab8a8f8927309fc3.mockapi.io/movie"
    );
    setDataSource(response.data);
  }

  const handleClick = (id) => {
    console.log(id);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies-layout">
      <Carousel numberOfSlide={8} category={"Trending"} autoplay />
      <Row>
        <Col span={18}>
          <div className="movies">
            {dataSource.map((movie) => (
              <div
                key={movie.id}
                className="movies__content"
                onClick={() => handleClick(movie.id)}
              >
                <img src={movie.poster_path} alt="image error " />
                <p>{movie.name}</p>
              </div>
            ))}
          </div>
        </Col>
        <Col span={6}>
          <div className="movies-sidebar">
            <h1>Movie Categories</h1>
            <ul className="categories">
              <li>Action</li>
              <li>Drama</li>
              <li>Comedy</li>
              <li>Horror</li>
              <li>Romance</li>
            </ul>

            <h2>Popular Movies</h2>
            <ul className="popular-movies">
              <li>The Matrix</li>
              <li>Inception</li>
              <li>Interstellar</li>
              <li>The Dark Knight</li>
              <li>Avengers: Endgame</li>
            </ul>

            <h2>Settings</h2>
            <ul className="settings">
              <li>Language</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Movies;
