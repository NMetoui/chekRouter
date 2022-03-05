import React from "react";
import { useState } from "react";
import { Container, Navbar, Form, Button, Modal, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const NavBar = ({
  selectRating,
  setSelectRating,
  setSearchCondition,
  movies,
  setMovies,
}) => {
  const [show, setShow] = useState(false);

  const [movieToAdd, setMovieToAdd] = useState({
    adult: "",
    backdrop_path: "",
    genre_ids: "",
    id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: "",
    poster_path: "",
    release_date: "",
    title: "",
    video: "",
    vote_average: "",
    vote_count: "",
  });

  const handleAdd = () => {
    setMovies([...movies, movieToAdd]);

    setShow(false);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "4 rem" }}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>MovieApp</Navbar.Brand>
          <Nav.Link onClick={() => navigate("/")} href="#home">
            Home
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/MovieList")} href="#MovieList">
            Movies
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/")} href="">
            Contact us
          </Nav.Link>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Rating
            onClick={(x) => setSelectRating(x / 20)}
            RatingValue={selectRating}
            size={30}
            style={{ marginRight: "2rem" }}
          />
          <Form.Control
            type="text"
            placeholder="search movies"
            style={{ width: "300px" }}
            onChange={(e) => setSearchCondition(e.target.value)}
          />
        </Container>
        <Button
          style={{
            backgroundColor: "#FFC300",
            color: "black",
            borderColor: "black",
          }}
          onClick={() => setShow(true)}
        >
          ADD Movie
        </Button>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ backgroundColor: "#FFC300" }}>
            Movie to Add
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, title: e.target.value })
              }
              type="text"
              placeholder="Title"
            />
            <Form.Label>Movie Overview</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, overview: e.target.value })
              }
              type="text"
              placeholder="Overview"
            />
            <Form.Label>Movie Poster URL</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, poster_path: e.target.value })
              }
              type="text"
              placeholder="Poster URL"
            />
            <Form.Label>Movie Rating</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, vote_average: e.target.value })
              }
              type="number"
              placeholder="Rating"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#FFC300" }}
            variant="secondary"
            onClick={() => setShow(false)}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#FFC300" }}
            variant="primary"
            onClick={() => handleAdd()}
          >
            ADD Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;
