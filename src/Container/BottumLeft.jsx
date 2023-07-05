import { Grid } from '@mui/material'
import React from 'react'
import CustomizedMenus from './CustomizedMenus'

const BottumLeft = () => {
  return (
   
     <Grid width="250px" sx={{height:"450px",mt:1,mr:1,boxShadow:4}} >
        <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',p:1}}>
            <Grid> bb</Grid>
            <Grid><CustomizedMenus /></Grid>
        </Grid>
     </Grid>
    
  )
}

export default BottumLeft
