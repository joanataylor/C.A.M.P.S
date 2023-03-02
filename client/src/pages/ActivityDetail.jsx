import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
  }, [id])

  return (
    <div className="d-flex flex-row justify-content-between align-items-center"

      style={{
        minHeight: "92.65vh",
        backgroundSize: "cover",
        backgroundImage: `url(https://i.imgur.com/iDOjNPh.jpg) `,
      }}




    >
      <VerticalNavbar />
      <Container className="d-flex justify-content-between align-items-center mx-auto p-5" >
        <Card className="h-100 shadow-lg rounded border border-dark" style={{ maxWidth: "45%", backgroundColor: "#e0e0e0" }} >
          <h2 className="d-flex flex-row justify-content-center align-items-center" >
            Activity Details
          </h2>
          <CardMedia
            component="img"
            alt="Water skiing"
            height="300"
            image={activity.image}
          />
          <CardContent>
            <Typography
              className="d-flex flex-row justify-content-center align-items-center"
              gutterBottom
              variant="body1 h2"
              component="div"
            >
              {activity.name}
            </Typography>
            <Typography variant="h5" className="mb-4" color="text.secondary">
              {activity.description}
            </Typography>
          </CardContent>
          <CardActions className="d-flex flex-row justify-content-center align-items-center">
          </CardActions>
        </Card>

        <Card className="h-100 shadow-lg rounded border border-dark" style={{ width: "45%", backgroundColor: "#e0e0e0", }}>
          <CardContent className="d-flex flex-column justify-content-between ">
            <Typography variant="body1" color="text.primary">
              <Typography variant="h4" sx={{ mb: 2, fontSize: "2rem", }}>
                Location
              </Typography>
            </Typography>
            <Typography variant="h5" className="mb-4" color="text.secondary">
              {activity.location}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <Typography variant="h4" sx={{ mb: 2, fontSize: "2rem" }}>
                Duration
              </Typography>
            </Typography>
            <Typography variant="h5" className="mb-4" color="text.secondary">
              {activity.duration}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <Typography variant="h4" sx={{ mb: 2, fontSize: "2rem" }}>
                Items
              </Typography>
            </Typography>
            <Typography variant="h5" className="mb-4" color="text.secondary">
              {activity.items}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <Typography variant="h4" sx={{ mb: 2, fontSize: "2rem" }}>
                Date
              </Typography>
            </Typography>
            <Typography variant="h5" className="mb-4" color="text.secondary">
              {activity.date}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
