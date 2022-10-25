import { IconButton, Drawer, Link } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';

export default function SideDrawer({cate}) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
          <IconButton sx={{padding: '0'}} onClick={toggleDrawer('right', true)}>
            <Menu />
          </IconButton>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Link href='/' className='nav-link nav-hover'>Home</Link>
            {cate.map(ele => <Link key={ele.id} href={`/${ele.name}`} className='nav-link nav-hover'>{ele.name}</Link>)}
            <Link href='/about' className='nav-link nav-hover'>About</Link>
            <Link href='/contact' className='nav-link nav-hover'>Contact</Link>

          </Drawer>
    </>
  );
}
