import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar';
import wake_boarding from "../images/wake_boarding.jpg"
import "./styles/calendar.css"
import surf from "../images/surf.jpg"
import snow from "../images/snow.jpg"
import { maxWidth } from '@mui/system';

const data = [
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Surfing",
        photo: surf
    },
    {
        date: "Wed, Feb 12",
        activity: "Snow Boarding",
        photo: snow
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },

    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
    {
        date: "Wed, Feb 12",
        activity: "Wake Boarding",
        photo: wake_boarding
    },
]


function DashBoard() {
    const [activities, setActivities] = useState("");
    const [campers, setCampers] = useState("")
    const [value, setValue] = React.useState(new Date());
    const [date, setDate] = useState(
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        }
    );

    const handleChange = (date) => {
        setDate(date)
    }

    useEffect(() => {
        fetch("http://localhost:8080/activity/all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setActivities(data)
            })
            .catch(err => console.log(err))
        fetch("http://localhost:8080/campers/all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCampers(data)
            })
            .catch(err => console.log(err))
    }, [])


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
        "10": "Oct",
        "11": "Now",
        "12": "Dec",
    }


    return (
        <div>
            <div className='p-5 d-flex justify-content-around' style={{ height: "75vh", width: "100%"}}>
                <Paper className='w-25 h-100'>
                    <div style={{ height: "100%", maxHeight: "100%" }}>
                        <p className='h2 bg-info text-center font-weight-bold p-2'>All Activities</p>
                        <div style={{ height: "35%", width: "100%", overflow: "scroll", scrollBehavior: "smooth" }} className="mt-3 scroll">
                            {activities ? activities.map((activity) => {
                                return (
                                    <div key={activity.name} className='d-flex justify-content-between w-75' style={{ margin: "0 auto" }}>
                                        <a href='#'>
                                            <h4>{activity.name}</h4>
                                        </a>
                                        <p className='font-weight-bold'>{monthKey[activity.date.slice(5, 7)]} {activity.date.slice(-2)}, {activity.date.slice(0, 4)}</p>
                                    </div>
                                )
                            }) : ""}
                        </div>
                        <p className='h2 text-center bg-success font-weight-bold p-2'>All Campers</p>
                        {campers && <div className='d-flex justify-content-between w-75 h4 pb-2' style={{ margin: "0 auto", borderBottom: "1px solid black" }}>
                            <th>Name</th>
                            <th>From</th>
                        </div>
                        }
                        <div style={{ height: "28%", width: "100%", overflow: "scroll", scrollBehavior: "smooth" }} className="mt-3 scroll">
                            {campers ? campers.map((camper) => {
                                return (
                                    <div key={camper.first_name} className='d-flex justify-content-between lign-items-center w-75' style={{ margin: "0 auto" }}>
                                        <a href='#'>
                                            <h4>{camper.first_name.charAt(0).toUpperCase() + camper.first_name.slice(1)}</h4>
                                        </a>
                                        <p>{camper.city}</p>
                                    </div>
                                )
                            }) : ""}
                            
                        </div>
                    </div>
                </Paper>
                <div className='d-flex flex-column justify-content-between' style={{ maxWidth: "100%" }}>
                    <Paper className='calendar'>
                        <Calendar setDate={setDate} value={value} setValue={setValue} date={date} />
                    </Paper>
                    <Paper className='info d-flex align-items-center justify-content-between' sx={{ height: "25%" }} style={{ maxHeight: "100%", borderRadius: "4rem", border: "3px #1976d2 solid" }}>
                        <div style={{ marginLeft: "1rem" }} className="d-flex flex-column">
                            <p>
                                {date.activity}
                            </p>
                            <p>
                                {date.date}
                            </p>
                        </div>
                        <a href='#'>More Info</a>
                        <img className='img-fluid' src={date.photo} alt={date.activity === "No Activity Planned Yet" ? "" : date.activity} style={{ height: "100%", borderRadius: "3.8rem" }} />
                    </Paper>
                </div>
            </div>

        </div>
    )
}

export default DashBoard;