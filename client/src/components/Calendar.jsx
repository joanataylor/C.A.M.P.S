import * as React from 'react';
// import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "../pages/styles/calendar.css"
import wake_boarding from "../images/wake_boarding.jpg"
import surf from "../images/surf.jpg"
import snow from "../images/snow.jpg"
// import Badge from "@mui/material/Badge"
// import { PickersDay } from '@mui/x-date-pickers';

// const isWeekend = (date) => {
//     const day = date.day();

//     return day === 0 || day === 6;
// };

export default function Calendar({ setValue, value, setDate, date, setPostedActivity }) {

    // const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
    const data = [
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Surfing",
            photo: surf
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Snow Boarding",
            photo: snow
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },

        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
        {
            date: value.toString().slice(0, 11),
            activity: "Wake Boarding",
            photo: wake_boarding
        },
    ]


    const numKey = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "June": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                // shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    const currentDate = newValue.$d.toString().slice(4, 15)
                    const dateString = `${currentDate.slice(-4)}-${numKey[currentDate.slice(0, 3)]}-${currentDate.slice(4, 6)}`
                    fetch(`http://localhost:8080/activity/current/${dateString}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            setPostedActivity(data)
                        }).catch((err) => {
                            setPostedActivity()
                        })
                    setValue(newValue);
                }}

                renderInput={(params) => <TextField {...params} fullWidth />}
            // renderDay={(day, _value, DayComponentProps) => {
            //     const isSelected =
            //         !DayComponentProps.outsideCurrentMonth &&
            //         highlightedDays.indexOf(day.date()) >= 0;

            //     return (
            //         <Badge
            //             key={day.toString()}
            //             overlap="circular"
            //             badgeContent={isSelected ? '🌚' : undefined}

            //         >

            //             <PickersDay {...DayComponentProps} name={day.toString().slice(5, 7)} onClick={() => console.log(day.toString().slice(0, 11))} />
            //         </Badge>
            //     );
            // }}
            />
        </LocalizationProvider>
    );
}