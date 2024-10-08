import Carousel from "../../components/carousel";
import "./index.scss";

function HomePage() {
  return (
    <div>
      <Carousel numberOfSlide={1} category={"Trending"} autoplay />
      <h1>Horror</h1>
      <Carousel numberOfSlide={5} category={"Horror"} autoplay />
      <h1>Comedy</h1>
      <Carousel numberOfSlide={4} category={"Comedy"} autoplay />
      <h1>Romance</h1>
      <Carousel numberOfSlide={5} category={"Romance"} autoplay />
      <h1>Sci-Fi</h1>
      <Carousel numberOfSlide={5} category={"Sci-Fi"} autoplay />
      <h1>Drama</h1>
      <Carousel numberOfSlide={3} category={"Drama"} autoplay />
      <h1>Documentary</h1>
      <Carousel numberOfSlide={4} category={"Documentary"} autoplay />
      <h1>Animation</h1>
      <Carousel numberOfSlide={3} category={"Animation"} autoplay />
    </div>
  );
}

export default HomePage;
