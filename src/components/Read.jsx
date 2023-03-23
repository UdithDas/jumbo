import { Typography, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';
import Addstudent from './Addstudent';

const Read = () => {
    var[update,setUpdate]=useState(false)
    var[single,setSingle]=useState([])
    var [students, setstud] = useState([])
    const color = blue[400];
    const color2 = blueGrey[900];
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response.data)
                setstud(students = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteStudent=(id)=>{
        console.log("delete clicked"+id);
        axios.delete("http://localhost:3005/students/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })}
     
        const updatevalues =(value)=>{
            console.log("update",value)
            setSingle(value)
            console.log("update clicked",single)
            setUpdate(true)
        }
    
    var finalJS= <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Place</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value, index) => {
                return <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <Button variant='contained' color='error' onClick={()=>deleteStudent(value.id)} >Delete</Button>
                    </TableCell>
                    <TableCell>
                        <Button variant='contained' color='success'
                         onClick={()=>updatevalues(value)}>Update</Button>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>
if (update)
finalJS=<Addstudent data={single} method="put"/>

  return (
    <div>
      <br></br>
      <br></br>
 {finalJS}
            
    </div>
  )
}

export default Read
