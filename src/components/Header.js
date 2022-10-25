import { Grid, Box,Link } from "@mui/material"
import {useState } from "react"
import BasicMenu from "./minicomponent/Menu"
import SideDrawer from "./minicomponent/Drawer"
import {data} from '../pages/prodact'

const Header = ()=>{
    const [cate] = useState(data.cate)
    return(
        <Grid container sx={{padding: '16px 32px'}} justifyContent="space-around" alignItems='center'>
            <Grid item xs={6} md={3}>
                <Link href='/' className="nav-logo nav-hover">
                    My Store
                </Link>
            </Grid>
            <Grid item sx={{display:{xs: 'none', md: 'block'}}}>
                <Box>
                    {cate.map(ele => <Link key={ele.id} href={`/${ele.name}`} className='nav-link nav-hover'>{ele.name}</Link>)}
                    <Link href='/about' className='nav-link nav-hover'>about</Link>
                    <Link href='/contact' className='nav-link nav-hover'>contact</Link>

                </Box>
            </Grid>
            <Grid container xs={6} md={3} justifyContent='end'>
                <Grid item>
                    <BasicMenu />
                </Grid>
                <Grid item pl={4} sx={{display:{md: 'none'}}}>
                    <SideDrawer cate={cate} />
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Header;