import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import axios from 'axios'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
const Nread = () => {
    var[teachers,setteachers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/teachers")
        .then(response=>{
            console.log(response.data)
            setteachers(teachers=response.data)            
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" Link>STUDENTS</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Class</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {teachers.map((value,index)=>{
                    return<TableRow key={index}> 
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.class}</TableCell>
                </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Nread
