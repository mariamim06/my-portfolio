import React from 'react';
// import './Home.css';

import Header from '../../Shared/Header/Header';
import Wellcome from '../Wellcome/Wellcome';
import About from '../About/About';

function Home() {
    return (
      <div className="">
        <Wellcome></Wellcome>          
        <About></About>
      </div>

      );
    }
    
    export default Home;