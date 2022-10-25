import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const Slide = ({data, type})=>{
    const [imgs, setImg] = useState([data])
    const [initVal, setVal] = useState(0);
    const [view, setView] = useState(imgs[initVal])
    const nextChange = ()=>{
        initVal === imgs.length - 1 ? 
        setVal(0) : setVal(initVal => initVal + 1);
    }
    const backChange = ()=>{
        initVal === 0 ? 
        setVal(imgs.length - 1) : setVal(initVal => initVal - 1);
    }

    const chooseImg = ind => setVal(ind);

    useEffect(()=>{
        setView(imgs[initVal])
    }, [initVal, imgs])

    return(
        <>
            {type === 'product' &&
                <Grid container className='side-imgs' sx={{display:{xs: 'none', sm: 'block'}}} sm={3}>
                    {imgs.map((ele, ind)=>
                        <Grid item>
                            <Box component='img' src={`../images/${ele}`} onClick={()=>chooseImg(ind)} sx={{width: '80px', height: '90px'}} className={ind === initVal ? 'active': 'none-active'}/>
                        </Grid>
                    )}
                </Grid>
            }
            <Grid item xs={12} sm={type === 'product' ? 9 : 12} className='slide-main'>
                <Box component='img' src={`../images/${view}`}  className={type === 'product'? 'img-item':'img-baner'}/>
                <Box component='button' onClick={backChange} className='slide-btn back'><ArrowBackIos /></Box>
                <Box component='button' onClick={nextChange} className='slide-btn next'><ArrowForwardIos /></Box>
            </Grid>

        </>
    )
}

export default Slide;