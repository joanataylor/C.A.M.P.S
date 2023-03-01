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
    <div className="d-flex flex-row justify-content-between align-items-center">
      <VerticalNavbar />
      <div className="mx-auto">
        <Container className="d-flex justify-content-between ml-4">
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
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 355, maxHeight: 300, }}>
            <CardContent>

            <Typography variant="body2" color="text.primary">
            <Typography variant="h4" sx={{ mb: 2, fontSize: "18px" }}>
              Location
            </Typography>
            </Typography>

              <Typography variant="body2" color="text.secondary">
                {activity.location}
              </Typography>

              <Typography variant="body2" color="text.primary">
              <Typography variant="h4" sx={{ mb:2, fontSize: "18px" }}>
                Duration
              </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.duration}
              </Typography>

              <Typography variant="body2" color="text.primary">
              <Typography variant="h4" sx={{ mb: 2, fontSize: "18px" }}>
                Items
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.items}
              </Typography>

              <Typography variant="body2" color="text.primary">
              <Typography variant="h4" sx={{ mb: 2, fontSize: "18px" }}>
                Date
              </Typography>
              </Typography>
            <Typography variant="body2" color="text.secondary">
              {activity.date}
            </Typography>

            </CardContent>
          </Card>
        </Container>
      </div>
    </div>
  );
}
