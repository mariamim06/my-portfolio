import React from 'react';
import './About.css';
// import bg from '../../Images/Background/pexels-photo-4175070.jpg'
import profile from '../../Images/Profile/261306896_433069951518679_422125198420228016_n.jpg'

const About =() => {
    return (
      <div>
         <div className="about">
          <h1>Designer and developer devoted to crafting <span id="special-word">beautiful</span> web experiences focused on <span id="special-word">simplicity</span> and <span id="special-word">purpose</span>.</h1>
        </div>
        <div className="intro">
          {/* <img className="bg" src={bg} alt="" /> */}
         <div className="d-flex justify-content-center align-items-center about-me">
           
             <h1>Hey there!</h1>
           
           <img  width="200"
          height="200" className="rounded profile"  src={profile} alt="" />
         </div>
         <p>My name is Lars Olson, and I like to design all kinds of things. I specialize in UI/UX design and game development, often doing both at the same time. I have a passion for making beautiful interfaces with excellent usability.

As a wearer of many hats, my experience also includes graphic design, typography, scripting, video editing, and sometimes making art in the third dimension. I'm always curious and always learning...
‍
​I'm a native Wisconsinite and certified lover of pineapple on pizza. I currently reside in Austin, Texas. I'm a co-founder of The Bread & Butter Game Co.

My mission as a game developer is to combine creative mechanics, aesthetics, and a whole lot of polish - all in the name of making genuinely charming experiences that never get in the way of the player's fun.

But most importantly, I never take myself too seriously.
</p>
        </div>
      </div>
      );
    }
    
    export default About;