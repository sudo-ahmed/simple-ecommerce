import { Button, Grid, Box, TextField, Divider, Chip, Typography } from "@mui/material";
import {Phone , Email, LocationOn, LocalPhone} from '@mui/icons-material';
const Contact = ()=>{
    return(
            <Grid container p={2}>
                <Grid container xs={12} p={3}>
                    <Typography component="h2" variant="h4">Contact Us</Typography>
                </Grid>
                <Grid container p={3} xs={12} sm={6}>
                    <Box component="form" display="flex" flexWrap="wrap">
                        <Box component="input" className="input-contact" placeholder="Your Name"/>
                        <Box component="input" className="input-contact" placeholder="Your Email"/>
                        <Box component="textarea" className="input-contact" placeholder="Enter Message" ></Box>
                        <Box component="input" type="submit" value="SEND" className="input-contact" />
                    </Box>
                </Grid>
                <Grid container p={2} xs={12} sm={6} sx={{marginTop:{sm: '15px'}}}>
                    <Grid item xs={12} p={2}>
                        <LocalPhone sx={{verticalAlign: 'middle', paddingRight: '16px'}}/>
                        <Typography component="b">
                            19588
                        </Typography>
                    </Grid>
                    <Grid item xs={12} p={2}>
                        <Email sx={{verticalAlign: 'middle', paddingRight: '16px'}}/>
                        <Typography component="b">
                            order@store.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} p={2}>
                        <LocationOn sx={{verticalAlign: 'middle', paddingRight: '16px'}}/>
                        <Typography component="b">
                            6 October, Giza
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Contact;