import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { Container, TextField, Paper, Button } from "@mui/material";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [student, setStudent]= useState({
    name: "",
    address: ""
  }) ;
  const[students, setStudents]=useState([])


  const handleChange = (e) => {
    const {name, value} = e.target
    setStudent({
      ...student,
      [name]: value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(student);
    fetch("http://localhost:8080/student/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
  }).then(()=>{
    console.log("new student added")
  }).catch(()=> console.log ("error"))
  setStudent({
    name:"",
    address:""
  })
}
useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
}, [student])

  return (
    <Container>
      <Paper elevation={3} styler={paperStyle}>
        <h1 style={{color: "blue"}}><u>Add Student</u></h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={student.name}
            name="name"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Student Adress"
            variant="outlined"
            fullWidth
            value={student.address}
            name="address"
            onChange={handleChange}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </Box>
        {/* {student.name}
        {student.address} */}
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
            Id: {student.id}<br/>
            Name: {student.name}<br/>
            Address:{student.address}
            </Paper>
        ))}
      </Paper>
    </Container>
  );
}
