import React from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../../component/MovieCard/MovieCard";

const MovieList = ({ movies, searchCondition, selectRating }) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container
        style={{
          width: "100%",
          heigth: "100vh",
          padding: "5px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignContent: "flex-start",
        }}
      >
        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(searchCondition.toLowerCase()) &&
              movie.vote_average >= selectRating
          )
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </Container>
    </div>
  );
};

export default MovieList;
