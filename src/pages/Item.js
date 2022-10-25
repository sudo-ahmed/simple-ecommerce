import { useParams } from "react-router-dom";
import {data} from './prodact'
import {pathName, compare} from '../functions/functions'
import Card from '../components/minicomponent/Card'
import Slide from '../components/Slide'
import { useEffect, useState } from "react";
import { Alert, Box, Button, ButtonGroup, Container, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Details from "../components/minicomponent/Details";
import { connect } from "react-redux";

const Item = ({addToCart})=>{
    let {id} = useParams()
    let [[dataItem]] = useState(data.products.filter(ele => ele.id === Number(id) && ele.cate === pathName()));
    let [related] = useState(compare(dataItem, data.products))
    let [dataCart, setCart] = useState(null)
    let [alert, setAlert] = useState(false)
    console.log(dataItem)

    useEffect(()=>{
        if(dataItem){
            setCart({id: dataItem.id, img: dataItem.img, title: dataItem.title, price: dataItem.price, color: null, size: null, amount: 1})
        }
    },[dataItem])

    if (!dataItem) return 'Sorry This Product Is Not Found';

    return(
        <Container>
            <Grid container justifyContent='space-between'>
                <Grid container xs={12} md={5} sx={{padding: '24px 0'}} textAlign='center' justifyContent='end' alignItems='center'>
                    <Slide data={dataItem.img} type='product' />
                </Grid>

                <Divider sx={{width: {xs: '100%', md: '0'}}}/>

                <Grid container xs={12} sm={7} md={4} p={3}>
                    <Grid item xs={12} pb={1}>
                        <Box component='h2' className='title-item'>
                            {dataItem.title}
                        </Box>
                    </Grid>
                    <Grid item xs={12} pb={1}>
                        <Rating name="read-only" display='block' value={dataItem.rate} readOnly />
                    </Grid>
                    <Grid item xs={12} pb={1}>
                        <Typography variant="body1" gutterBottom component="div">
                            Price:
                        </Typography>
                        <Box className='price-item'>
                            {'$ ' + dataItem.price}
                        </Box>
                    </Grid>
                    {dataItem.size.length !== 0 &&
                        <Grid item xs={12} pb={1}>
                            <Typography variant="body1" gutterBottom component="div">
                                Size: {dataCart && dataCart.size}
                            </Typography>
                            <ButtonGroup m={1}>
                                {
                                    dataItem.size.map(ele =>
                                        <Button className={dataCart && dataCart.size === ele ? 'active-size':''} onClick={()=>setCart((curr) => {return {...curr, size: ele}})}>{ele}</Button>
                                    )
                                }
                            </ButtonGroup>
                        </Grid>
                    }
                    {dataItem.color.length !== 0 &&
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom component="div">
                                Color: {dataCart && dataCart.color}
                            </Typography>
                            <Box className="colors-item">
                                {
                                    dataItem.color.map(ele => 
                                        <Box component='input' className={dataCart && dataCart.color === ele ? 'active-color':''} title={ele} onClick={()=>setCart((curr) => {return {...curr, color: ele}})} type='button' backgroundColor={ele}  />
                                    )
                                }
                            </Box>
                        </Grid>
                    }
                </Grid>

                <Divider sx={{width: {xs: '100%', sm: '0'}}}/>

                <Grid container xs={12} sm={5} md={3} p={3}>
                    <Grid item xs={12}>
                        <Button fullWidth={true} onClick={()=>addToCart(dataItem, dataCart, setAlert)} variant='contained' color='error' startIcon={<ShoppingCartOutlined />}>
                            Add To Cart
                        </Button>
                        {alert &&
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                {dataItem.size.length && dataItem.color.length !== 0 ? 
                                    <Alert severity="error">Choose Size And Color</Alert>: null
                                }
                                {dataItem.size.length !== 0  && dataItem.color.length === 0 ?  
                                    <Alert severity="error">Choose Size</Alert> : null
                                }
                                {dataItem.color.length !== 0 && dataItem.size.length === 0? 
                                    <Alert severity="error">Choose Color</Alert> : null
                                }
                            </Stack>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{margin:'0.5em'}}/>
            <Grid container>
                <Grid item>
                    <Details />
                </Grid>
            </Grid>
            
            <Divider sx={{width: {xs: '100%'}}}/>
            <Grid container>
                <Grid item xs={12}>
                    <Box component='h3'>Related Products</Box>
                </Grid>                
            </Grid>
            <Grid container flexWrap='nowrap' className="scroll-list">
                {related.map(ele=>
                    <Grid item p={2} xs={12}>
                        <Card data={ele} /> 
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}
function mapDispatchToProps(dispatch) {
    return {
      addToCart: (dataItem, data, setAlert) => {
        if(dataItem.size.length !== 0 & dataItem.color.length !== 0){
            if(!data.size || !data.color){
                setAlert(true)
            }else{
                dispatch({ type: 'ADD_ITEM',  payload: data })
                setAlert(false)    
            }
        }else if(dataItem.size.length !== 0 & dataItem.color.length === 0){
            if(!data.size){
                setAlert(true)
            }else{
                dispatch({ type: 'ADD_ITEM',  payload: data })
                setAlert(false)    
            }
        }else if(dataItem.color.length !== 0 & dataItem.size.length === 0){
            if(!data.color){
                setAlert(true)
            }else{
                dispatch({ type: 'ADD_ITEM',  payload: data })
                setAlert(false)    
            }
        }else{
            dispatch({ type: 'ADD_ITEM',  payload: data })
            setAlert(false)    

        }
      }
    }
}
  
export default connect(null, mapDispatchToProps)(Item);
