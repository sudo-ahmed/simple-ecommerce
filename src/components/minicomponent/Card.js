import {Link, Rating, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';

const MultiActionAreaCard = ({data, cate})=>{
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
        <CardActions className='action-card'>
          <Link href={`/${data.cate}/${data.id}`}>
            <CardMedia
              component="img"
              height="150"
              image={`../images/${data.img}`}
              alt="green iguana"
              className='img-card'
            />
          </Link>
        </CardActions>
        <CardContent>
          <CardActions className='action-card'>
            <Link href={`/${data.cate}/${data.id}`} title={data.title} className="title-card">
              {data.title}
            </Link>
          </CardActions>
          <Rating name="read-only" value={data.rate} readOnly />
          <Typography variant="h6" className="price-card">
            $ {data.price}
          </Typography>
        </CardContent>
    </Card>
  );
}
export default MultiActionAreaCard