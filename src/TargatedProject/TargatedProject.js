import React, { useEffect, useState } from 'react';
import './TargatedProject.css';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import axios from 'axios';
const TargatedProject = () => {
  const { projectId } = useParams();
  const [projects, setProjects] = useState([])
    useEffect( () => {
        fetch('./projects.json')
        .then(res=>res.json())
        .then(data => setProjects(data))
    }, [])

return (
      <div className="targatedProject"> 
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c0522" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,208C320,171,400,85,480,80C560,75,640,149,720,160C800,171,880,117,960,133.3C1040,149,1120,235,1200,250.7C1280,267,1360,213,1400,186.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <h2>My Projects</h2>
        {
            projects.filter((proJect) => proJect._id === projectId).map(proJect => <div key={proJect._id}>
              <h1>me {proJect.name}</h1>
              <section className="d-flex justify-content-between project">
              <Carousel>
<Carousel.Item>
<img
  className="d-block img"
  src={proJect.img1}
  alt="First slide"
/>
<Carousel.Caption>
  <h3></h3>
  <p></p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block img"
  src={proJect.img2}
  alt="Second slide"
/>

<Carousel.Caption>
  <h3></h3>
  <p></p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block img"
  src={proJect.img3}
  alt="Third slide"
/>

<Carousel.Caption>
  <h3></h3>
  <p></p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
                <div className="p-5">
                  <h3>{proJect.name}</h3>
                  <p>{proJect.intro}</p>
                  <Link to={`/targatedProject/${proJect._id}`}>
                  <button className="btn btn-warning my-2">View Details of {proJect.name.toLowerCase()} </button>
                  </Link>
                </div>
              </section>
      </div>)
        }
  </div>

    

      );
    }
    
    export default TargatedProject;