import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VerticalNavbar from "../components/VerticalNavbar";
import { Container } from "@mui/system";
import "./styles/activitycard.css";

export default function ActivityDetail() {
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
              image="https://images.unsplash.com/photo-1502197882471-6bf45ba0e39d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <CardContent>
              <Typography
                className="d-flex flex-row justify-content-center align-items-center"
                gutterBottom
                variant="h5"
                component="div"
              >
                Water Skiing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Water skiing is a water sport that involves being towed behind a
                boat while standing on skis. The skier holds onto a rope
                attached to the boat and uses the boat's forward motion to glide
                across the surface of the water.
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
            <Typography variant="h5" style={{ color: "red", fontSize: "1.5rem"  }} >
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
