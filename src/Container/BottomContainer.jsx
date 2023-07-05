import { Container, Grid } from '@mui/material'
import React from 'react'
import BottumTop from './BottumTop'
import BottumLeft from './BottumLeft'
import BottumMidT from './BottumMidT'
import BottumMidB from './BottumMidB'
const BottomContainer = () => {
    return (
        <Container >
            <BottumTop />
            <Grid sx={{display:"flex",flexDirection:'row'}}>
                <Grid>
                   
                    <BottumLeft />
                </Grid>
                <Grid sx={{display:"flex",flexDirection:'column',mt:1,ml:1,boxShadow:4,}}>
                    <Grid sx={{mb:1,mr:1,boxShadow:4,}}>
                        <BottumMidT />
                    </Grid>
                    <Grid sx={{mt:1,mr:1,boxShadow:4,}}>
                        
                        <BottumMidB/>
                    </Grid>
                </Grid>

            </Grid>

        </Container>
    )
}

export default BottomContainer

