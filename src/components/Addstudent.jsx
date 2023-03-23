import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = (props) => {
    var [students, setStudents] = useState(props.data)
    const handleChange = (e) => {
        const { name, value } = e.target
        setStudents({ ...students, [name]: value })
        console.log(students)
    }
    const saveData = () => {
        console.log("Button clicked");
        if (props.method === "post") {
            axios.post("http://localhost:3005/students", students)
                .then(response => {
                    alert("successfully added")
                })
                .catch(error => {
                    alert("failed")
                })
        } else if (props.method === "put") {
            axios.put("http://localhost:3005/students/" + students.id, students)
                .then((response) => {
                    console.log("put data" + response.data)
                    alert("success")
                    window.location.reload(false)
                })
        }
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
