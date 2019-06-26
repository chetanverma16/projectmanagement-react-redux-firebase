import React from 'react';
import {Link} from 'react-router-dom';

import ProjectSummary from './ProjectSummary';
const ProductList = ({projects})=>{
 
 return(
        <div className='project-list section'>
        {projects && projects.map((project)=>(
            <Link to={'/project/' + project.id} key={project.id}>
            <ProjectSummary project = {project} ></ProjectSummary>
            </Link>
        ))}
        </div>
    )
}

export default ProductList;