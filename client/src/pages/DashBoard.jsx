import { Paper } from '@mui/material';
import React, { useState } from 'react'
import Calendar from '../components/Calendar';
import wake_boarding from "../images/wake_boarding.jpg"

function DashBoard() {

    const [value, setValue] = React.useState(new Date());
    const [date, setDate] = useState(
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        }
    );
    console.log(date)

    const handleChange = (date) => {
        setDate(date)
    }

    return (
        <div>
            <div className='p-5 d-flex justify-content-around' style={{ height: "75vh", width: "100%" }}>
                <Paper className='w-25'>

                </Paper>
                <div className='d-flex flex-column justify-content-between' style={{ maxWidth: "100%" }}>
                    <Paper>
                        <Calendar setDate={setDate} value={value} setValue={setValue} date={date} />
                    </Paper>
                    <Paper className='d-flex align-items-center justify-content-between' sx={{ height: "25%" }} style={{ maxHeight: "100%", borderRadius: "4rem", border: "3px #1976d2 solid" }}>
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