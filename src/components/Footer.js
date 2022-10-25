import { Box, Grid } from "@mui/material";

const Footer = ()=>{
    return(
        <Grid container p={8} justifyContent='center' className="main-footer">
            <Grid item>
                <Box>Create By Ahmed Tarek</Box>
            </Grid>
        </Grid> 
    )
}

export default Footer;