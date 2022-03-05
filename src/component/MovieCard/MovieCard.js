import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "36rem",
          flexDirection: "rows",
          padding: "15px",
          marginTop: "50px",
        }}
      >
        <Card.Img variant="top" src={movie.poster_path} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview.substring(0, 20) + "..."}</Card.Text>
          <Button
            className="my-btn"
            style={{
              backgroundColor: "#FFC300",
              color: "black",
              width: "150px",
              borderColor: "black",
            }}
            variant="outline-info"
            onClick={() => navigate(`/MovieList/${movie.id}`)}
          >
            See more
          </Button>
          <Rating
            size={20}
            initialValue={movie.vote_average}
            iconsCount={5}
            readonly
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
