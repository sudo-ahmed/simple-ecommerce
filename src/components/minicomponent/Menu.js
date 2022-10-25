import {Badge, Box, Button, Grid, IconButton, Menu, MenuItem} from '@mui/material';
import { useEffect, useState } from 'react';
import { Delete, LocalMall } from '@mui/icons-material';
import { connect } from 'react-redux';
  
  const BasicMenu = ({ cart = [], total, delItem, remove, getTotal, increase, decrease })=>{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    getTotal()
  })
  return (
    <>

      <Badge badgeContent={cart.length} color="secondary">
        <LocalMall 
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{cursor: 'pointer'}}
        />
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className='menu-cart'
      >
        {cart.length > 0 ?
          (cart.map(ele=>
            <MenuItem className='menu-item'>
              <Grid container flexWrap='nowrap'>
                <Grid item>
                  <Box component='img' sx={{width: '50px', height: '50px'}} src={`../images/${ele.img}`}/>
                </Grid>
                <Grid item>
                  <Box component='h4' pl={3} sx={{width: '100%'}}>{ele.title}</Box>
                </Grid>
              </Grid>
              <Grid container justifyContent='space-between'>
                  <Grid item>
                    <Box>
                      <Box component='button' className='btn-count' onClick={()=>increase(ele.id)}>+</Box>
                      <Box sx={{padding: '0 10px'}} component='b'>{ele.amount}</Box>
                      <Box component='button' className='btn-count' onClick={()=>decrease(ele.id)}>-</Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={()=>delItem(ele.id)} sx={{padding: '0'}} color="error">
                      <Delete />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Box component='b' pr={2}>{ele.price + '$'}</Box>
                  </Grid>
              </Grid>
            </MenuItem>
          )):
          (<Box p={3} sx={{textAlign: 'center', fontWeight: 'bold'}}>Cart Is Empty</Box>)
        }
        {cart.length > 0 && 
          <Grid container p={3} justifyContent='space-between'>
              <Grid item>
                <Button onClick={remove}>Clear Cart</Button>
              </Grid>
              <Grid item>
                <Box component='b'>{'Total : ' + total + ' $'}</Box>
              </Grid>
          </Grid>
        }

      </Menu>
    </>
  );
}

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart: cart, total: total };
}
 
function mapDispatchToProps(dispatch) {
  return {
    remove: () => dispatch({ type: 'CLEAR_CART' }),
    delItem: (data) => dispatch({ type: 'REMOVE', payload: data }),
    getTotal: () => dispatch({ type: 'GET_TOTALS' }),
    increase: (data) => dispatch({ type: 'INCREASE', payload: data }),
    decrease: (data) => dispatch({ type: 'DECREASE', payload: data })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BasicMenu);


