import React from 'react'
import { Grid, Typography } from '@mui/material'
const BottumTop = () => {
  return (
    <Grid item sx={{p:1,bgcolor:"#bdbdbd",boxShadow:7}}>
       <Typography variant='h6' textAlign="center" color='primary'>Name</Typography>
    </Grid>
  )
}

export default BottumTop
