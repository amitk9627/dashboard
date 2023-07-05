import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const BottumMidB = () => {
  return (
    <Grid sx={{p:3}}>
        <Grid sx={{display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
              <Typography variant='h5'>Transactions</Typography>
              <Grid sx={{display:'flex',alignItems:'center'}}><SearchIcon/><TextField id="outlined-basic"  variant="outlined" height="80px"></TextField></Grid>
        </Grid>
        <Grid>

        </Grid>
    
    </Grid>
  )
}

export default BottumMidB
