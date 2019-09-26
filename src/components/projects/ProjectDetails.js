import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/login' />
  if (project) {
    return (
      <div className="project-summary-seperate">
        <p className="project-title">{project.title}</p>
        <p className="project-content" >{project.content}</p>
        <p className="project-name">posted by <span className="name"> {project.authorFirstName} {project.authorLastName}</span></p>
        <p className="project-time">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
