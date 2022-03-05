import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Movie = ({ movies }) => {
  const params = useParams();
  console.log(params);
  let myId = params.id;
  let myMovie = movies.find((movie) => movie.id == myId);
  console.log(myMovie);
  let Background = myMovie.backdrop_path;
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <Row>
          <Col
            style={{
              textAlign: "left",
              color: "white",
              marginBottom: "50px",
              marginTop: "50px",
            }}
          >
            <h1>{myMovie.title}</h1>
            <h7>Release Date : {myMovie.release_date}</h7>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={myMovie.poster_path} style={{ width: "300px" }}></img>
            <h4
              style={{
                textAlign: "justify",
                padding: "50px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {myMovie.overview}
            </h4>
          </Col>
          <Col
            style={{
              backgroundImage: `url(${Background})`,
              opacity: "0.5",
              height: "100vh",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;
