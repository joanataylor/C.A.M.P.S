import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

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
        e.preventDefault()
        console.log(formUser)
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formUser)
        }).then((res) => {
            return res.json()
        }).then(data => {
            console.log(data)
            console.log("New user Created")
        })
        .catch((err) => {
            console.log(err)
        })
        setFormUser({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm: "",
        })
    }

    return (
        <div style={{width: "100%"}}>
            <div
                id="background image"
                className="border border-dark mb-2"
                style={{
                    backgroundImage: `url("https://i.imgur.com/7I5G9at.jpg")`
                }}
            >
                <div>
                    <img className="mt-2" src="https://i.imgur.com/WCCbsbP.png"></img>
                </div>
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
            <div className="d-flex justify-content-around ">
                <Card sx={{ width: 350 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.imgur.com/chbZMgC.jpg"
                            alt="soccer"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h8" component="div">
                                Beach Games
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 350 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.imgur.com/glDKcxE.jpg"
                            alt="surfing"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h8" component="div">
                                Surfing
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div
                className="d-flex justify-content-around mt-2"
                style={{ backgroundColor: "#1976D2" }}
            >
                <form>
                    <p className="fs-2">Sign Up Now!</p>
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
                            <button type="submit" className="btn btn-dark" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    <img
                        className="h-75 mt-3"
                        src="https://i.imgur.com/BHB6r2Q.png"
                        alt="CCC logo"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Welcome;