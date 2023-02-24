import { Container } from "@mui/system";
import React from "react";
import counselorJo from "../images/jojo.jpeg";
import counselorEthan from "../images/ethan.jpeg";
import counselorGokhan from "../images/gokhan.jpeg";
import counselorBrandon from "../images/brandon.jpeg";
import counselorHasan from "../images/hasan.jpeg";
import counselorVincent from "../images/vincent.jpeg";
import { Button } from "@mui/material";
import "./styles/counselor.css";

function CounselorDetail() {
  return (
    <Container>
      <h1>Counselors</h1>
      {/* <Paper elevation={24}> */}
        <div className="d-flex flex-row justify-content-center align-items-center mb-3">
          <div className="card my-card w-25 shadow mr-3">
            <img
              // className="img-fluid"
              className="card-img-top img-fluid"
              src={counselorJo}
              // style={{ height: "240px" }}
              class="img-thumbnail"
              alt="img-thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Joana Grave</h5>
              <p className="card-text">
                Portugal
              </p>
            </div>
            <div className="card-overlay">
              <h5 className="card-title">Fun Facts:</h5>
              <p className="card-text">
                I speak 3 languages, I have 3 sisters and I want to have 3 more babies.
              </p>
            </div>
          </div>

          <div className="card shadow my-card w-25 mr-3">
            <img
              // className="img-fluid"
              className="card-img-top img-fluid"
              src={counselorEthan}
              // style={{ height: "240px" }}
              class="img-thumbnail"
              alt="img-thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Ethan Smith</h5>
              <p className="card-text">
                Arizona
              </p>
            </div>
            <div className="card-overlay">
              <h5 className="card-title">Fun Facts:</h5>
              <p className="card-text">
                I've been a nurse, a scientist and a web developer, and now a camp counselor.
              </p>
            </div>
          </div>

          <div className="card shadow my-card w-25">
            <img
              // className="img-fluid"
              className="card-img-top img-fluid"
              src={counselorGokhan}
              // style={{ height: "240px" }}
              class="img-thumbnail"
              alt="img-thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Gokhan Sigircik</h5>
              <p className="card-text">
                Turkey
              </p>
            </div>
            <div className="card-overlay">
              <h5 className="card-title">Fun Facts:</h5>
              <p className="card-text">
                I speak 4 languages and ive travelled to 35 countries.
              </p>
            </div>
          </div>
        </div>
      {/* </Paper> */}

      {/* <Paper elevation={24}> */}
        <div className="d-flex flex-row justify-content-center align-items-center mb-3">

          <div className="card shadow my-card w-25 mr-3">
            <img
              // className="img-fluid"
              className="card-img-top img-fluid"
              src={counselorBrandon}
              // style={{ height: "240px" }}
              class="img-thumbnail"
              alt="img-thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Brandon DeBenedectis</h5>
              <p className="card-text">
                California
              </p>
            </div>
            <div className="card-overlay">
              <h5 className="card-title">Fun Facts</h5>
              <p className="card-text">
                I live in a snow globe and i'm a triplet.
              </p>
            </div>
          </div>

          <div className="card shadow my-card w-25 mr-3">
            <img
              // className="img-fluid"
              className="card-img-top img-fluid"
              src={counselorHasan}
              // style={{ height: "240px" }}
              class="img-thumbnail"
              alt="img-thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Hasan Huda</h5>
              <p className="card-text">
                New York
              </p>
            </div>
            <div className="card-overlay">
              <h5 className="card-title">Fun Facts:</h5>
              <p className="card-text">
                Likes to sleep in and do algos.
              </p>
            </div>
          </div>

          <div className="card shadow my-card w-25">
            <img
              // className="img-fluid"
              className="card-img-top img-fluid"
              src={counselorVincent}
              // style={{ height: "240px" }}
              class="img-thumbnail"
              alt="img-thumbnail"
            />
            <div className="card-body">
              <h5 className="card-title">Vincent Guerena</h5>
              <p className="card-text">
                California
              </p>
            </div>
            <div className="card-overlay">
              <h5 className="card-title">Fun Facts</h5>
              <p className="card-text">
                Cool mustache and chill.
              </p>
            </div>
          </div>

        </div>

        <Button variant="contained">Message Counselor</Button>
      {/* </Paper> */}

      {/* <div className="d-flex flex-row justify-content-center align-items-center p-5">
        <Paper elevation={24}>
          <Card sx={{ maxWidth: 345 }} className="p-3 mb-2">
            <CardMedia
              sx={{ height: 270 }}
              image={counselorEthan}
              style={{
                width: "200px",
                height: "200px",
                // borderRadius: "50%",
                margin: "auto",
              }}
              title="counselorOne"
            />
          </Card>

          <Card sx={{ maxWidth: 345 }} className="p-3 mb-2">
            <CardMedia
              sx={{ height: 270 }}
              image={counselorJo}
              style={{
                width: "200px",
                height: "200px",
                // borderRadius: "50%",
                margin: "auto",
              }}
              title="counselorOne"
            />
          </Card>

          <Card sx={{ maxWidth: 345 }} className="p-3">
            <CardMedia
              sx={{ height: 270 }}
              image={counselorGokhan}
              style={{
                width: "200px",
                height: "200px",
                // borderRadius: "50%",
                margin: "auto",
              }}
              title="counselorOne"
            />
          </Card>
        </Paper>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 270 }}
          image={counselorJo}
          title="counselorOne"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Joana Grave
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Born and raised in Portugal.
          </Typography>
        </CardContent>
        {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions> */}
      {/* </Card> */}
    </Container>
  );
}

export default CounselorDetail;
