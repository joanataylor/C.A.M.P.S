import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Array to store images for display at bottom of page.
const cardImages = [
  {
    id: 1,
    src: "https://i.imgur.com/chbZMgC.jpg",
    alt: "Beach Games",
  },
  {
    id: 2,
    src: "https://i.imgur.com/KghTggo.jpg",
    alt: "Water Skiing",
  },
  {
    id: 3,
    src: "https://i.imgur.com/9Efe946.jpg",
    alt: "Fishing",
  },
  {
    id: 4,
    src: "https://i.imgur.com/l9UipTU.jpg",
    alt: "Paddle Boarding",
  },
  {
    id: 5,
    src: "https://i.imgur.com/glDKcxE.jpg",
    alt: "Surfing",
  },
];

// Array of images for the card carousel
const cardCarousel = [
  {
    id: 1,
    src: "https://i.imgur.com/DADkVQN.jpg",
    alt: "Camper Surfing",
  },
  {
    id: 2,
    src: "https://i.imgur.com/ENIyhnn.jpg",
    alt: "Camper Free Diving",
  },
  {
    id: 3,
    src: "https://i.imgur.com/ZQD6RAK.jpg",
    alt: "Camper Snorkleing",
  },
  {
    id: 4,
    src: "https://i.imgur.com/jBiePbM.jpg",
    alt: "Camper Fishing",
  },
];

function Welcome() {
  const [formUser, setFormUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formUser);
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("New user Created");
        console.log(formUser.email);
      })
      .catch((err) => {
        // console.log(correctEmail)
        console.log(err);
        window.location.href = `moreinfo/${formUser.email}`;
      });
    setFormUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div
        id="background-image"
        className=" mb-2"
        style={{
          backgroundImage: `url("https://i.imgur.com/7I5G9at.jpg")`,
        }}
      >
        <div>
          <img
            className="mt-2"
            src="https://i.imgur.com/WCCbsbP.png"
            alt="CCC Logo"
          ></img>
        </div>
        {/* Card Carousel at the top of the page. Mapping over an array gives carousel strange behavior */}
        <div className="d-flex justify-content-center">
          <div className="mt-3 w-a175 mb-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://i.imgur.com/DADkVQN.jpg"
                    className="d-block w-30"
                    alt="camper surfing"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.imgur.com/ENIyhnn.jpg"
                    className="d-block w-30"
                    alt="camper free dive"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.imgur.com/ZQD6RAK.jpg"
                    className="d-block w-30"
                    alt="camper snorkeling"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.imgur.com/jBiePbM.jpg"
                    className="d-block w-30"
                    alt="camper fishing"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Maps over images in array to give example activites */}
      <div className="d-flex justify-content-around ">
        {cardImages.map((image, index) => (
          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image={image.src}
              alt={image.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                {image.alt}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        className="d-flex justify-content-around mt-2"
        style={{ backgroundColor: "#1976D2" }}
      >
        {/* Registration Form */}
        <form>
          <p className="fs-2 form-group">Sign Up Now!</p>
          <div className="d-flex justify-content-center">
            <div className="m-3">
              <label className="form-label" htmlFor="first_name">
                First Name:
              </label>
              <br />
              <input
                type="text"
                name="first_name"
                id="firstName"
                className="form-control"
                value={formUser.first_name}
                onChange={handleChange}
              ></input>
              <br />
              <label className="form-label" htmlFor="last_name">
                Last Name:
              </label>
              <br />
              <input
                type="text"
                name="last_name"
                id="lastName"
                className="form-control"
                value={formUser.last_name}
                onChange={handleChange}
              ></input>
              <br />
              <label className="form-label" htmlFor="email">
                Email Address:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formUser.email}
                onChange={handleChange}
              ></input>
              <div id="emailHelp" className="form-text-secondary">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="m-3">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formUser.password}
                onChange={handleChange}
              ></input>
              <br />
              <label className="form-label" htmlFor="confirm">
                Confirm Password:
              </label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                name="confirm"
                className="form-control"
                value={formUser.confirm}
                onChange={handleChange}
              ></input>
              <br />
              <button
                type="submit"
                className="btn btn-dark"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          <img
            className="h-75 mt-3 img-fluid"
            src="https://i.imgur.com/BHB6r2Q.png"
            alt="CCC logo"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
