import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import wake_boarding from "../images/wake_boarding.jpg";
import "./styles/calendar.css";
import surf from "../images/surf.jpg";
import snow from "../images/snow.jpg";
import { maxWidth } from "@mui/system";

const numKey = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  June: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function DashBoard() {
  const [activities, setActivities] = useState("");
  const [campers, setCampers] = useState("");
  const [value, setValue] = useState(new Date());
  const [postedActivity, setPostedActivity] = useState();
  const [date, setDate] = useState({
    date: value.toString().slice(0, 11),
    activity: "Wake Boarding",
    photo: wake_boarding,
  });
  const [deleted, setDeleted] = useState(false)

  const handleChange = (date) => {
    setDate(date);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/activity/delete/${id}`, { method: "POST", headers: { "Content-Type": "application/json" } })
      .then(res => res.json())
      .then(data => {
        console.log("item delete")
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetch("http://localhost:8080/activity/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setActivities(data);
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:8080/campers/all")
      .then((res) => res.json())
      .then((data) => {
        setCampers(data);
        setDeleted(false);
      })
      .catch((err) => console.log(err + "hi"));
    const currentDate = new Date().toString().slice(4, 15);
    const dateString = `${currentDate.slice(-4)}-${numKey[currentDate.slice(0, 3)]
      }-${currentDate.slice(4, 6)}`;
    fetch(`http://localhost:8080/activity/current/${dateString}`)
      .then((res) => res.json())
      .then((data) => {
        setPostedActivity(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleted]);

  // console.log(value)
  // console.log(dateString)

  // useEffect(() => {
  //     setPostedActivity(dateString)
  // },[value])

  // useEffect(() => {
  //     const currentDate = value.$d.toString().slice(4, 15)
  //     console.log(currentDate)
  //     const dateString = `${currentDate.slice(-4)}-${numKey[currentDate.slice(0, 3)]}-${currentDate.slice(4, 6)}`
  //     console.log(dateString)
  //     fetch(`http://localhost:8080/activity/current/${dateString}`)
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data)
  //             setPostedActivity(data)
  //         }).catch((err) => console.log("err" + err))
  // }, [date])

  const monthKey = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Now",
    12: "Dec",
  };

  return (
    <div>
      <div
        className="p-5 d-flex justify-content-around"
        style={{
          height: "75vh",
          width: "100%",
          minHeight: "96vh",
          backgroundSize: "cover",
          backgroundImage: `url(https://i.imgur.com/79JNXwV.jpg) `,
        }}
      >
        <div className="h-100" style={{width: "45%"}}>
          <Paper
            className="mb-5 shadow-lg border border-dark"
            style={{ height: "50%", maxHeight: "50%", borderRadius: "rem" }}
          >
            <p
              className="h2 bg-success text-center font-weight-bold p-2"
            >
              All Activities
            </p>
            <div
              style={{
                height: "75%",
                width: "100%",
                overflow: "scroll",
                scrollBehavior: "smooth",
              }}
              className="mt-3 scroll"
            >
              {activities
                ? activities.map((activity) => {
                  return (
                    <div
                      key={activity.name}
                      className="d-flex justify-content-between align-items-end mb-5"
                      style={{ marginLeft: "1.2rem", width: "90%", borderBottom:"2px solid black" }}
                    >
                      <a className="mr-4 d-flex align-items-start" style={{ width: "50%", wordWrap: "break-word" }} href={`activity/${activity.id}`}>
                        <h4 style={{ width: "100%", wordWrap: "break-word" }}>{activity.name}</h4>
                      </a>
                      <div className="d-flex " style={{ width: "40%" }}>
                        <p className="font-weight-bold align-self-end">
                          {monthKey[activity.date.slice(5, 7)]}{" "}
                          {activity.date.slice(-2)},{" "}
                          {activity.date.slice(0, 4)}
                        </p>
                        <div
                          className="d-flex justify-content-between ml-3"
                          style={{ width: "13%" }}
                        >
                          <a href={`/editactivity/${activity.id}`}>
                            <i className="fa-solid fa-pen ml-3 btn btn-primary"></i>
                          </a>
                          <i className="fa-solid fa-trash btn btn-danger" style={{ height: "fit-content" }} onClick={() => { handleDelete(activity.id); setDeleted(true)}
                          }></i>
                        </div>
                      </div> 
                    </div>
                  );
                })
                : ""}
            </div>
          </Paper>
          <Paper
            className="border border-dark "
            style={{ height: "42%", maxHeight: "100%" }}
          >
            <p
              className="h2 text-center bg-success font-weight-bold p-2"
            >
              All Campers
            </p>
            {campers.length > 0 && (
              <div
                className="d-flex justify-content-between w-75 h4 pb-2"
                style={{ margin: "0 auto", borderBottom: "1px solid black" }}
              >
                <div>Name</div>
                <div>From</div>
              </div>
            )}
            <div
              style={{
                height: "60%",
                width: "100%",
                overflow: "scroll",
                scrollBehavior: "smooth",
              }}
              className="mt-3 scroll"
            >
              {campers
                ? campers.map((camper) => {
                  return (
                    <div
                      key={camper.id}
                      className="d-flex justify-content-between lign-items-center w-75"
                      style={{ margin: "0 auto" }}
                    >
                      <a href="#">
                        <h4>
                          {camper.first_name.charAt(0).toUpperCase() +
                            camper.first_name.slice(1)}
                        </h4>
                      </a>
                      <p>{camper.city}</p>
                    </div>
                  );
                })
                : ""}
            </div>
          </Paper>
        </div>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ width: "38%" }}
        >
          <Paper className="calendar border border-dark">
            <Calendar
              setDate={setDate}
              value={value}
              setValue={setValue}
              date={date}
              setPostedActivity={setPostedActivity}
            />
          </Paper>
          {postedActivity ? (
            <Paper
              className="info d-flex align-items-center justify-content-between"
              sx={{ height: "25%" }}
              style={{
                maxHeight: "100%",
                borderRadius: "4rem",
                border: "3px #1976d2 solid",
              }}
            >
              <div
                style={{ marginLeft: "1rem" }}
                className="d-flex flex-column"
              >
                <p>{postedActivity.name}</p>
                <p>
                  {` ${monthKey[postedActivity.date.slice(5, 7)]
                    } ${postedActivity.date.slice(
                      8
                    )}, ${postedActivity.date.slice(0, 4)}`}
                </p>
              </div>
              <a href={`/activity/${postedActivity.id}`}>More Info</a>
              <img
                className="img-fluid"
                src={postedActivity.image}
                alt={
                  postedActivity.name ? postedActivity.name : "No Activity Plan"
                }
                style={{ height: "100%", borderRadius: "3.8rem" }}
              />
            </Paper>
          ) : (
            <Paper
              className="info d-flex align-items-center justify-content-center"
              sx={{ height: "25%" }}
              style={{
                maxHeight: "100%",
                borderRadius: "4rem",
                border: "3px #1976d2 solid",
              }}
            >
              <h2 className="text-center">No Activity Planned Yet</h2>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
