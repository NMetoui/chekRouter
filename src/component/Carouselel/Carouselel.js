import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carouselel = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Carousel
        style={{
          padding: "20px",
          width: "50%",
          height: "50%",
        }}
      >
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselel;
