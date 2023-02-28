import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VerticalNavbar from "../components/VerticalNavbar";
import { Container } from "@mui/system";
import "./styles/activitycard.css";
import { useParams } from "react-router-dom"

export default function ActivityDetail() {

  const [activity, setActivity] = useState({})

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/activity/${id}`)
    .then(res => res.json())
    .then(data => {
      setActivity(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <VerticalNavbar />
      <div className="mx-auto">
        <Container className="d-flex">
          <Card sx={{ maxWidth: 355 }}>
            <h3 className="d-flex flex-row justify-content-center align-items-center">
              Activity Details
            </h3>
            <CardMedia
              component="img"
              alt="Water skiing"
              height="250"
              image={activity.image}
            />
            <CardContent>
              <Typography
                className="d-flex flex-row justify-content-center align-items-center"
                gutterBottom
                variant="h5"
                component="div"
              >
                {activity.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.description}
              </Typography>
            </CardContent>
            <CardActions className="d-flex flex-row justify-content-center align-items-center">
              {/* <Button class="twitter-button" size="small">
                Request info
              </Button> */}
              <Button class="twitter-button" size="small">
                Book now
              </Button>
            </CardActions>
          </Card>

          <Card className="d-flex flex-column justify-content-between align-items-center">
            <Typography variant="h5" style={{ color: "red", fontSize: "1.5rem" }} >
              <h4><u><b>WHAT WE OFFER</b></u></h4>
            </Typography>
            <CardContent className="d-flex flex-column justify-content-between align-items-center">
              <Typography variant="h5" style={{ fontSize: "1.2rem" }} gutterBottom
                component="div">
                <u>Family Trips</u>
              </Typography>

              <br />
              <Typography variant="h5" style={{ fontSize: "1.2rem" }} gutterBottom
                component="div">
                <u>School Trips</u>
              </Typography>
              <br />
              <Typography variant="h5" style={{ fontSize: "1.2rem" }} gutterBottom
                component="div">
                <u>Camp Trips</u>
              </Typography>
              <br />
              <Typography variant="h5" style={{ fontSize: "1.2rem" }} gutterBottom
                component="div">
                <u>Youth Groups</u>
              </Typography>
              <br />
              <Typography variant="h5" style={{ fontSize: "1.2rem" }} gutterBottom
                component="div">
                <u>Private Events</u>
              </Typography>
              <br />
              <Typography variant="h5" style={{ fontSize: "1.2rem" }} gutterBottom
                component="div">
                <u>Professional Development</u>
              </Typography>
            </CardContent>
            <CardActions className="d-flex flex-row justify-content-center align-items-center">
              <Button class="twitter-button" size="small">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    </div>
  );
}
