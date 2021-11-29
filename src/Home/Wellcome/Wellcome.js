import React from 'react';
import './Wellcome.css';
// import bg from '../../Images/Header/../../Images/Header/N8lAnTbplGS_iT-RxmfdHTnd6UcDCKsJ9nrcHbSr6LI.webp';
import bg from '../../Images/Header/../../Images/Header/d4lkmbj-25c7abd6-7b0c-40e2-9cce-1e6984d6d49b.jpg';
// import bg from '../../Images/Header/../../Images/Header/night-landscape-sea-moon-mountains-vector-cartoon-illustration-seascape-rocks-stone-ledge-over-sand-beach-ocean-227549801.jpg';
import star from '../../Images/Header/stars.png';
import moon_ from '../../Images/Header/moon.png';
// import mountains_behind from '../../Images/Header/mountains_behind.png';
import mountains_front from '../../Images/Header/mountains_front.png';
const Wellcome = () => {
  // const stars = document.getElementById('starts');
  // const moon = document.getElementById('moon');
  // const text = document.getElementById('text');
  // const front = document.getElementById('front');
  // const btn = document.getElementById('btn');
  // window.addEventListener('scroll', function(){
  //   const value = window.scrollY; 
  //   stars.style.left = value + 'px';
  // })
    return (
      <div className="wellcome">
        <h1>WELLCOME</h1>
        <img src={bg}/>
        <img src={star} id="stars"/>
        <img src={moon_} id="moon"/>
        <h2 id="text1">Hi, <br/> I'm Maria,</h2>
        <h2 id="text">Wellcome To My Portfolio Website</h2>
        <a href='#' id="btn">Contact Me</a>
        {/* <img src={behind} id="behind"/> */}
        <img src={mountains_front} id="front"/>
      </div>

      );


    }
    
    export default Wellcome;