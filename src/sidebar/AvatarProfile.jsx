import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Typography } from '@mui/material';

const AvatarProfile = () => {
  return (
    <div style={{ margin: '10px 0',display:"flex",justifyContent:"space-around" ,alignItems:'center'}}>
      <Stack direction="row" spacing={2}>

        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

      </Stack>
      <Typography variant='h6' style={{color:"#fafafa"}}>Machinery </Typography>

    </div>
  )
}

export default AvatarProfile;
