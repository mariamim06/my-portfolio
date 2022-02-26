import React, { useState, useEffect  } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Projects.css';
// import me from '../../../public/projects.json'

const Projects = () => {

    const [projects, setProjects] = useState([])
    useEffect( () => {
        fetch('./projects.json')
        .then(res=>res.json())
        .then(data => setProjects(data))
    }, [])

 
    return (
      <div className="projects"> 
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c0522" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,208C320,171,400,85,480,80C560,75,640,149,720,160C800,171,880,117,960,133.3C1040,149,1120,235,1200,250.7C1280,267,1360,213,1400,186.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
          {/* <h2>Projects</h2> */}
          <h2 className="welcome">Wellcome To My Portfolio Website</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c0522" fill-opacity="1" d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,149.3C480,128,549,96,617,90.7C685.7,85,754,107,823,112C891.4,117,960,107,1029,117.3C1097.1,128,1166,160,1234,154.7C1302.9,149,1371,107,1406,85.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
          <div className="project-container" id="projects">
          <h1>Some of my works are here...</h1>
          {
                projects.map(proJect => <div key={proJect._id}>
                  <section className=" project">
                  <Carousel>
  <Carousel.Item>
    <img
      className="d-block img img-fluid"
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
      className="d-block img img-fluid"
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
      className="d-block img img-fluid"
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
                      <p className="projectIntro">{proJect.intro}</p> 
                      <Link to={`/project${proJect._id}`}>
                      <button className="btn my-btn m-2">View Details</button>
                      {/* <button className="btn btn-info m-2">View Details of {proJect.name.toLowerCase()} </button> */}
                      </Link>
                      <Link to={proJect.livesite}>
                     <button className="btn my-btn m-2">Visit Website</button>
                      </Link>
                    </div>
                  </section>
          </div>)
            }
            
          </div>
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c0522" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,208C320,171,400,85,480,80C560,75,640,149,720,160C800,171,880,117,960,133.3C1040,149,1120,235,1200,250.7C1280,267,1360,213,1400,186.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>

      );
    }
    
    export default Projects;