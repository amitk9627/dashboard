import { Grid, Typography } from '@mui/material'
import React from 'react'

const BottumMidT = () => {
  return (
    <Grid width='50vw'sx={{height:'150px',p:2,display:'flex',flexDirectionr:'row',justifyContent:'space-between'}}>
     <Grid>
        <Typography variant='h6'>Name</Typography>
        <Typography variant='body1'>Phone :</Typography>
        <Typography variant='body1'>Email: <span style={{color:'blue',fontSize:'.8rem'}}>Add Email</span></Typography>
        <Typography variant='body1'>No credit Limit <span style={{color:'blue',fontSize:'.8rem'}}>Add Credit</span></Typography>

     </Grid>
     <Grid>
        
     <Typography variant='body1'>wh</Typography>
        <Typography variant='body1'>Address</Typography>
        <Typography variant='body1'>GstIn <span style={{color:'blue',fontSize:'.8rem'}}>Add Gst</span></Typography>
     </Grid>
    </Grid>
  )
}

export default BottumMidT
