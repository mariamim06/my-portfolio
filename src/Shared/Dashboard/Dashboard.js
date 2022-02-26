import React from 'react';
import { useEffect } from 'react';
import './Dashboard.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import profile from '../../Images/Profile/261306896_433069951518679_422125198420228016_n.jpg';

const Dashboard = () => {

    return (
<section className="navbar navbar-expand-lg">
<div className="Dashboard collapse navbar-collapse">
{/* <button 
        className="navbar-toggler"
        // onClick={ function(){
        //   setTimeout(function(){ animation(); });
        // }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
</button> */}
<Link className="user" to="/" exact>
      <img  
          className=" img-fluid profile-pic"  
          src={profile} alt="" />
        <h1>Maria Mim</h1>
        <h6>MERN Stack Developer</h6> 
      </Link>
        <div className="" id="navbarSupportedContent">
          <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
        <Link className="nav-item" as={HashLink} to="/aboutme">About Me</Link>
           <Link className="nav-item" href="https://drive.google.com/file/d/1RmRb7BLYGMkuEvZ40zeRNJhLy_KfiQAf/view?usp=sharing">Resume</Link>
           <Link className="nav-item" as={HashLink} to="/projects">Projects</Link>
           <Link className="nav-item" as={HashLink} to="/blogs">Blogs</Link>
        </div>
      
</div>
{/* <button 
        className="navbar-toggler"
        // onClick={ function(){
        //   setTimeout(function(){ animation(); });
        // }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle sectionigation"
        >
        <i className="fas fa-bars text-white"></i>
      </button> */}
      {/* <div id="menu" className="menu-bars">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faSquareXmark}></FontAwesomeIcon>
</div> */}
</section>

        
    );
};

export default Dashboard;