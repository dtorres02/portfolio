"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { ListItemButton, ListItemIcon, ListItem, ListItemText } from '@mui/material';

// Icon Imports from mui
import SchoolIcon from '@mui/icons-material/school';
import PersonIcon from '@mui/icons-material/Person';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';


export default function ButtonAppBar() {

    // Drawer State Controller
    const [open, setOpen] = React.useState(false);

    // Drawer Toggle Function
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen)
    };

    // Drawer Constant
    const DrawerList = (
      <Box sx = {{width: 250}} role = "presentation" onClick = {toggleDrawer(false)}>
        <List>
          {['Home','About Me', 'Projects', 'Education', 'Social Media'].map((text, index) =>
            <ListItem key = {text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon/>}
                  {index === 1 && <PersonIcon/>}
                  {index === 2 && <AccountTreeIcon/>}
                  {index === 3 && <SchoolIcon/>}
                  {index === 4 && <PublicIcon/>}
                </ListItemIcon>
                <ListItemText primary = {text}/>
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    );  



  return (
    <Box sx={{ maxWidth: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = {toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open = {open} onClose = {toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              Header
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}