import React from 'react';
import './Intro.css';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {HashLink} from 'react-router-hash-link'
import profile from '../../Images/Profile/261306896_433069951518679_422125198420228016_n.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Intro() {
    return (
      <div className="flexbox container-fluid" id="intro">
      <div className="Intro ">
        <h6>Hi there, My name is</h6> <h1>MARIA MIM,</h1>
        <p>I'm a <span id="spc">designer</span> and <span id="spc">developer</span> devoted to craft beautiful web experiences <br/> focusing on <span id="spc">simplicity</span> and <span id="spc">purpose</span>.</p>
        <br/>
       <div className="d-flex intro-btns">
       <Nav.Link as={HashLink} to="/main#sendMail" className="button">Contact Me</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1RmRb7BLYGMkuEvZ40zeRNJhLy_KfiQAf/view?usp=sharing" className="button">My Resume</Nav.Link>
       </div>
      
      </div>
      <div className="contact">
        <a className="contact_icon" target="_blank" href="https://www.linkedin.com/in/mariamim06/">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        <a className="contact_icon" target="_blank" href="https://github.com/mariamim06?fbclid=IwAR0pgT1jqGs2rU_IPPu01Jf0MiOY_pSM5L7My956xGbWRNvFh3l8JETQSgg">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        <a className="contact_icon" target="_blank" href="https://www.facebook.com/mariamim06/"> 
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
        <a className="contact_icon" target="_blank" href="https://www.instagram.com/mariamim06/?fbclid=IwAR3zdXQLlFS1LNmYJRG4Xexu253YJZ-yLCWBBbVJ7-LFPqdTTt7FkC2_aO8">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
        <a className="contact_icon" target="_blank" href="https://twitter.com/mariamim06?fbclid=IwAR2JlZoofMLMO8jyXj7IzTSEQFp4cQlpSdotyiSi5HtN8td7LTkk_vRha8A">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>


       
        
       
        
        
      </div>
      </div>

      );
    }
    
    export default Intro;