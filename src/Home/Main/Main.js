import './Main.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import profile from '../../Images/Profile/261306896_433069951518679_422125198420228016_n.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home/Home';
import Dashboard from '../../Shared/Dashboard/Dashboard';

const drawerWidth = 250;

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawer">
      <Nav.Link className="user" as={HashLink} to="/main#intro" exact>
      <img  
          className=" img-fluid profile-pic"  
          src={profile} alt="" />
        <h1>Maria Mim</h1>
        <h6>MERN Stack Developer</h6> 
      </Nav.Link>
        <div className="navlinks">
        
           <Nav.Link className="nav-item" as={HashLink} to="/main#aboutMe">About Me</Nav.Link>
           <Nav.Link className="nav-item" href="https://drive.google.com/file/d/1RmRb7BLYGMkuEvZ40zeRNJhLy_KfiQAf/view?usp=sharing">Resume</Nav.Link>
           <Nav.Link className="nav-item" as={HashLink} to="/main#projects">Projects</Nav.Link>
           <Nav.Link className="nav-item" as={HashLink} to="/main#skills">Skills</Nav.Link>
           <Nav.Link className="nav-item" as={HashLink} to="/blogs">Blogs</Nav.Link>
        </div>
      
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="back" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
       
         <IconButton
            className="btn"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 5, pr:5, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton> 
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, m:0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Home></Home>

      </Box>
    </Box>
  );
}



export default Main;
