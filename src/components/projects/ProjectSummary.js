import React from 'react'
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className='project-summary'>
      <p className='project-title'>{project.title}</p>
      <p className='project-content'>{project.content}</p>
      <p className='project-name'>posted by <span className="name"> {project.authorFirstName} {project.authorLastName}</span></p>
      <p className='project-time'>{moment(project.createdAt.toDate()).calendar()}</p>
    </div>
  )
}

export default ProjectSummary
