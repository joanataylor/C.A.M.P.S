import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar';
import wake_boarding from "../images/wake_boarding.jpg"
import "./styles/calendar.css"
import surf from "../images/surf.jpg"
import snow from "../images/snow.jpg"

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
    }, [])

    return (
        <div>
            <div className='p-5 d-flex justify-content-around' style={{ height: "75vh", width: "100%" }}>
                <Paper className='w-25'>
                    <div className='container' style={{ height: "100%" }}>
                        <p className='h2 text-center'>All Activities</p>
                        <div style={{ height: "50%",width: "100%", overflow: "scroll", scrollBehavior: "smooth"}} className="mt-3 scroll">
                            {activities && data.map((activity) => {
                                return (
                                    <div key={activity.name} className='d-flex justify-content-between lign-items-center w-75' style={{ margin: "0 auto" }}>
                                        <a href='#'>
                                            <h4>{activity.name}</h4>
                                        </a>
                                        <p>{activity.date}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='h2 text-center'>All Counselors</p>
                        <div style={{ height: "50%" }}>

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