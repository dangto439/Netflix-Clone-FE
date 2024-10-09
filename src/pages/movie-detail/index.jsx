import { Col, Row, Card, Typography, Button } from "antd";
import "./index.scss";

const { Title, Paragraph } = Typography;

function MovieDetail() {
  // Thông tin chi tiết phim
  const movie = {
    title: "Inception",
    releaseDate: "July 16, 2010",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
    ],
    rating: 8.8,
    imageUrl:
      "https://img.freepik.com/premium-photo/cat-with-blue-outfit-dragon-it_662214-41149.jpg",
  };

  return (
    <div className="movie-detail">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            cover={<img alt={movie.title} src={movie.imageUrl} />}
            bordered={false}
          >
            <Title level={3}>{movie.title}</Title>
            <Paragraph>Release Date: {movie.releaseDate}</Paragraph>
            <Paragraph>Rating: {movie.rating}</Paragraph>
            <Button type="primary">Watch Now</Button>
          </Card>
        </Col>
        <Col span={16}>
          <Card bordered={false}>
            <Title level={4}>Description</Title>
            <Paragraph>{movie.description}</Paragraph>
            <Title level={4}>Genre</Title>
            <Paragraph>{movie.genre.join(", ")}</Paragraph>
            <Title level={4}>Director</Title>
            <Paragraph>{movie.director}</Paragraph>
            <Title level={4}>Cast</Title>
            <Paragraph>{movie.cast.join(", ")}</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetail;
