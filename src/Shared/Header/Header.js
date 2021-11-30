import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import profile from '../../Images/Profile/261306896_433069951518679_422125198420228016_n.jpg';
import './Header.css';

const Header =() =>{
    return (
        <>
        <Navbar sticky="top" className="navbar" variant="dark" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand as={HashLink} to="/home">
          <img
          alt=""
          src={profile}
          width="30"
          height="30"
          className="d-inline-block align-top rounded-circle"
        />{' '}
      Maria Mim
          </Navbar.Brand>
      
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="navlink" as={HashLink} to="/aboutme">About Me</Nav.Link>
           <Nav.Link className="navlink" href="https://drive.google.com/file/d/1RmRb7BLYGMkuEvZ40zeRNJhLy_KfiQAf/view?usp=sharing">Resume</Nav.Link>
           <Nav.Link className="navlink" as={HashLink} to="/projects">Projects</Nav.Link>
           <Nav.Link className="navlink" as={HashLink} to="/blogs">Blogs</Nav.Link>
           {/*  <Nav.Link as={HashLink} to="/home#packages">Packages</Nav.Link>
            <Nav.Link as={HashLink} to="/home#travellers">Travellers</Nav.Link>
            
            <div></div>
            {user?.email ?
            <div className="d-flex">
            <Nav.Link as={Link} to="/bookingReview">My Bookings</Nav.Link>
            <Nav.Link as={Link} to="/manageBookings">Manage All Bookings</Nav.Link>
            <Nav.Link as={Link} to="/addPackage">Add a new Package</Nav.Link>
            <Button onClick={ logOut } variant="light">Logout</Button>
            </div>:
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
      
          </Container>
        </Navbar>
      </>

      );
    }
    
    export default Header;