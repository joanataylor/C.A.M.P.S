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

export default function Calendar({ setValue, value, setDate, date }) {

    // const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
    const data = [
        {},
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


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={value}
                // shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                    setDate({
                        ...date,
                        date: newValue.toString().slice(0, 11),
                        activity: data[parseInt(newValue.toString().slice(5,7))] ? data[parseInt(newValue.toString().slice(5,7))].activity: "No Activity Planned Yet",
                        photo: data[parseInt(newValue.toString().slice(5,7))] ? data[parseInt(newValue.toString().slice(5,7))].photo : ""
                    })
                    console.log(newValue.toString().slice(5,7))
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