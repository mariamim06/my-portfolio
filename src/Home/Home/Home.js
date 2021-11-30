import React from 'react';
// import './Home.css';

import Header from '../../Shared/Header/Header';
import Wellcome from '../Wellcome/Wellcome';
import About from '../About/About';
import Projects from '../Projects/Projects';
function Home() {
    return (
      <div className="">
        <Wellcome></Wellcome>
        <Projects></Projects>       
        <About></About>
      </div>

      );
    }
    
    export default Home;