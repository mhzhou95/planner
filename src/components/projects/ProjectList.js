import React, { Fragment } from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <Fragment>
      {projects && projects.map((project) => {
        return (
          <Link className="project-list-link" to={`/project/${project.id}`} key={project.id}><ProjectSummary project={project} key={project.id} /></Link>
        )
      })}
    </Fragment>
  )
}

export default ProjectList
