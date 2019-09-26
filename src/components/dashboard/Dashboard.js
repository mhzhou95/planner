import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Dashboard = (props) => {
  const { projects, auth, notifications } = props;
  if (!auth.uid) return <Redirect to='/login' />
  return (
    <div className="dashboard-container">
      <div className="left">
        <ProjectList projects={projects} />
      </div>
      <div className="right">
        <Notifications notifications={notifications} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);