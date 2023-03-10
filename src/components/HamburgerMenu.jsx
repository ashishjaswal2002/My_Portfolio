import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { DrawerIcon } from '../assets/DrawerIcon';
import { CloseIcon } from '../assets/CloseIcon';



 function HamburgerMenu() {
  const [state, setState] = React.useState({
   
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


//   Function of default icon
function getIconForArray(text) {
    if (text === 'Home') {
      return <HomeIcon />;
    } else if (text === 'Blog') {
      return <RssFeedIcon />;
    } else if (text === 'Projects') {
      return <HomeWorkIcon />;
    } else {
      return null;
    }
  }
  


  const list = (anchor) => (
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, margin: 'dense' }}
    role="presentation"
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      <ListItem disablePadding >
        <ListItemButton sx={{display:'flex',justifyContent:'flex-end'}}  onClick={toggleDrawer(anchor, false)}>
          <CloseIcon style={{}}/>
        </ListItemButton>
      </ListItem>
      {['Home', 'Blog', 'Projects'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {getIconForArray(text)}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{display:'flex',justifyContent:'flex-start',margin:0,padding:0}}><DrawerIcon/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default HamburgerMenu;