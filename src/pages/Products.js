import { Container, Grid,Pagination} from '@mui/material';
import {useState } from 'react';
import Card from '../components/minicomponent/Card'
import {data} from './prodact'
const Products = ()=>{
    const currPage = window.location.pathname.slice(1)
    const [product] = useState(data.products.filter(ele => ele.cate === currPage ))
    const dataLimit = 8;
    const [pagination] = useState(Math.ceil(product.length / dataLimit));
    const [initPage, setInitPage] = useState(1);

    function changePage(event, page) {
        setInitPage(page);
    }
    const getPaginatedData = () => {
        const startIndex = initPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return product.slice(startIndex, endIndex);
    };
    
    return(
        <>
        <Container>
            <Grid container>
                {getPaginatedData().map((ele, idx) => (
                    <Grid key={idx} item xs={12} sm={6} md={4} lg={3} p={2}>
                        <Card data={ele}/>
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent='center' p={5}>
                <Grid item>
                    <Pagination
                        count={pagination}
                        onChange={(event, page)=>changePage(event, page)}
                    />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default Products