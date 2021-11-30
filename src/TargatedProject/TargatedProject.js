import React, { useEffect, useState } from 'react';
import './TargatedProject.css';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TargatedProject = () => {
  const {projectId} = useParams();
  const [project, setProject] = useState({});

  useEffect( () =>{
      fetch('./projects.json')
      .then(res => res.json())
      .then(data => setProject(data));
  }, [])

    return (
      <div className="targatedProject">
        {
          
        }
         <img src={proJect.img} alt="" /> 
 <h1>me me {projectId}</h1>
<div className="flexible-container">
<h5>Cost: ${proJect.cost}/per person</h5>
<h5>Duratiion: {proJect.days} Days | {proJect.nights} Nights</h5>
</div>

<h2>{proJect.name}</h2>
<p className="px-3">{proJect.point1}</p>
<p className="px-3">{proJect.point2}</p>
<p className="px-3">{proJect.point3}</p>
<p className="px-3">{proJect.point4}</p>
<p className="px-3">{proJect.point5}</p>
<Link to={`/booking/${projectId}`}>
<button className="btn btn-warning my-2">Book Now</button>
</Link>
</div>
    

      );
    }
    
    export default TargatedProject;