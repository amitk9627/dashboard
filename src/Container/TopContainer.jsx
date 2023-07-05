import { Container, Input, Button, Grid } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SettingsIcon from '@mui/icons-material/Settings';

const TopContainer = () => {
    return (
        <Container  sx={{display:'flex',p:1, width:"100%",justifyContent:"space-evenly"}}>
            <Grid maxWidth={'md'} sx={{display:'flex',alignItems:"center"}}><SearchIcon /> <Input placeholder="Search Transactions" color="primary" width='100%' ></Input></Grid>
            <Grid sx={{display:"flex",justifyContent:"space-between",gap:2,ml:5}} maxWidth='md'>
                <Button color="secondary" size="medium" variant="outlined" sx={{ borderRadius: 15, color: "#e91e63", bgcolor: "#f8bbd0", fontWeight: 600 }} >Add Sale</Button>
                <Button color="secondary" size="medium" variant="outlined" sx={{ borderRadius: 15, color: "#0d47a1", bgcolor: "#90caf9", fontWeight: 600 }} >Add Purchase</Button>
                <Button color="secondary" size="medium" variant="outlined" sx={{ borderRadius: 15, color: "#e91e63", bgcolor: "#fff", fontWeight: 600 }} >Add More</Button>
            </Grid>
            <Grid maxWidth={'md'} sx={{display:'flex'}}>
                <Grid item><WhatsAppIcon /></Grid> <Grid item><SettingsIcon /></Grid>
            </Grid>
        </Container>
    )
}

export default TopContainer
