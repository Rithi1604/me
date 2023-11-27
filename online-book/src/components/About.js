import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{fontFamily:"fantasy"}}variant='h2'>This is a crud application </Typography>
        <Typography sx={{fontFamily:"hoc"}} variant='h3'>MERN FULLSTACK </Typography>
        <Typography sx={{fontFamily:"hoc"}} variant='h3'>PRAVIN KUMAR R(21BPS1258)</Typography>
        <Typography sx={{fontFamily:"hoc"}} variant='h3'>RITHEESH S(21BPS1323)</Typography>
        <Typography sx={{fontFamily:"hoc"}} variant='h3'>SONTHOSH M(21MIS1023)</Typography>
        <Typography sx={{fontFamily:"hoc"}} variant='h3'>ADITHYA(21BCE5406)</Typography>
        <Typography sx={{fontFamily:"hoc"}} variant='h3'>HAMZA KHAN(21BCE2758)</Typography>


      </Box>
    </div>
  )
}

export default About
