import {Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
   var [students,setStudents]=useState({
    id:"",
    name:"",
    grade:""
   })
   const handleChange=(e)=>{
    const {name,value}=e.target
    setStudents({...students,[name]:value})
    console.log(students)
   }
   const saveData=()=>{
    console.log("Button clicked");
    axios.post("http://localhost:3005/students",students)
    .then(response=>{
        alert("successfully added")
    })
    .catch(error=>{
        alert("failed")
    })
   }
  return (
        <div>     
      <Typography variant='h5'>Add Students</Typography><br></br>
      <TextField label='id' variant='outlined' name='id' value={students.id} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='name' variant='outlined' name='name' value={students.name} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='grade' variant='outlined' name='grade' value={students.grade} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='success' onClick={saveData}>SUBMIT</Button>
      </div>
    
  )
}

export default Addstudent
