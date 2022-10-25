import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import {data} from './prodact'

const About = ()=>{
    const [brand] = useState(data.info[0].brand)
    return(
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Box component='img' sx={{height:{xs:'100px', sm:'200px', md:'300px'}, width:'100%'}} src='../images/about-cover.jpeg' />
                </Grid>
            </Grid>
            <Grid container p={2}>
                <Grid item xs={12} md={6} alignSelf="center" textAlign="center">
                    <Typography component="h3" variant="h5">
                        LOGO
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography component='h3' variant='h5' pb={2}>
                        About Us
                    </Typography>
                    <Typography component='p' variant='body1'>
                        Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here ...  Some Text Here
                    </Typography>
                </Grid>
            </Grid>
            <Grid  container>
                <Grid item xs={12}>
                    <Divider sx={{width: '100%', margin: '20px 0'}}/>
                </Grid>
                <Grid container justifyContent="space-between">
                    {brand.map(ele => 
                        <Grid item xs={4} textAlign="center" p={2}>
                            <Box component="img" src={`../images/${ele.logo}`} height="7vw" width="14vw"/>
                        </Grid>
                    )}
                </Grid>
            </Grid>


        </Container>
    )
}

export default About;