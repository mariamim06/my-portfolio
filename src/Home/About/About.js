import React from 'react';
import './About.css';
// import bg from '../../Images/Background/pexels-photo-4175070.jpg'
import profile from '../../Images/Profile/261306896_433069951518679_422125198420228016_n.jpg'

const About =() => {
    return (
      <div>
         {/* <div className="about">
          <h1>Designer and developer devoted to craft <span id="special-word">beautiful</span> web experiences focusing on <span id="special-word">simplicity</span> and <span id="special-word">purpose</span>.</h1>
        </div> */}
        <div className="intro">
          <h2>About Me</h2>
          {/* <img className="bg" src={bg} alt="" /> */}
         <div className="d-flex justify-content-between align-items-center mx-5 px-5 about-me">
           
             <h1 className="mx-5 px-5">Hey there!</h1>
           
           <img  width="200"
          height="200" className="rounded profile"  src={profile} alt="" />
         </div>
         <p>I'm Maria Mim, a Junior Web Developer. From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.

Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.

I'm excited to make the leap and continue refining my skills with the right company.
</p>
        </div>
      </div>
      );
    }
    
    export default About;