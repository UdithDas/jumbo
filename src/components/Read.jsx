import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
const Read = () => {
    var[amigos,setamigos]=useState([])
    useEffect(()=>{
        axios.get(" http://localhost:3005/students")
        .then(response=>{
            console.log(response.data)
            setamigos(amigos=response.data)            
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
          <Button color="inherit">TEACHERS</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Typography variant='h4' color={'cyan'}>Welcome To My App</Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {amigos.map((value,index)=>{
                    return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                </TableRow>
                })}
                
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Read
