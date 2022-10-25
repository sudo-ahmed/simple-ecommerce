import { Box, Grid, Divider, Typography, Container } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/minicomponent/Card'
import Slide from '../components/Slide';
import {data} from './prodact'
const Home = ()=>{
    const [brand] = useState(data.info[0].brand)
    const [cate] = useState(data.cate)
    const [newest] = useState(data.products.sort((a, b)=>{ return Number(b.date) - Number(a.date)}).slice(0, 4))
    const [best] = useState(data.products.filter(ele => ele.rate >= 5 ))
    const [discount] = useState(data.products.filter(ele => ele.discount === true))
    const [nameSection] = useState([
        {id: 1, name: 'latest product'},
        {id: 3, name: 'discount'},
        {id: 2, name: 'best rating'},
    ])
    console.log(brand);
    return(
        <Container>
            <Grid container justifyContent='center'>
                <Slide data='banner.webp' type='baner'/>
            </Grid> 
            <Grid container justifyContent='center' pt={2} pb={2}>
                {cate.map(ele => 
                    <Grid key={ele.id} Item p={2}>
                        <Link to={ele.name} className='caption-cate'>
                            <Box component='img' className='img-cate' sx={{height: '80px'}} src={`./images/${ele.img}`} />
                            <Box>{ele.name}</Box>
                        </Link>
                    </Grid>
                )}
            </Grid>
            {nameSection.map((ele, indx) => 
                <Grid container key={ele.id}>
                    <Grid item xs={12}>
                        <Typography variant='h4' className="title-section">
                            {ele.name}
                        </Typography>
                    </Grid>  
                    <Grid container flexWrap='nowrap' className="scroll-list">
                        {ele.name === 'latest product' &&
                            newest.map(ele =>  
                                <Grid key={ele.id} item xs={12}p={2}>
                                    <Card data={ele} />
                                </Grid>
                        )}
                       {ele.name === 'discount' &&
                            discount.map(ele =>  
                                <Grid key={ele.id} item xs={12} p={2}>
                                    <Card data={ele} />
                                </Grid>
                        )}
                        {ele.name === 'best rating' &&
                            best.map(ele =>  
                                <Grid key={ele.id} item xs={12} p={2}>
                                    <Card data={ele} />
                                </Grid>
                        )}
                    </Grid>
                    {
                        indx < nameSection.length -1 && <Divider sx={{width: '100%', margin: '20px 0'}}/>
                    }     
                    
                </Grid>
            )}
        </Container>
    )
}

export default Home