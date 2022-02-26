import React from 'react';
import './Home.css';

import Header from '../../Shared/Header/Header';
import Wellcome from '../Wellcome/Wellcome';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import SendMail from '../SendMail/SendMail';
function Home() {
    return (
      <div className="home">
        {/* <Wellcome></Wellcome> */}
        <Intro></Intro>
        <Projects></Projects>   
        <Skills></Skills>    
        <About></About>
        <SendMail></SendMail>
      </div>

      );
    }
    
    export default Home;