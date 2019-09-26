import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

const CreateProject = (props) => {
  const [state, setState] = useState({
    title: '',
    content: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(state);
    props.history.push("/")
  }
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/login' />
  return (
    <div className="create-project-wrapper">
      <form onSubmit={handleSubmit}>
        <h4 className="create-project-header">Create Plan</h4>
        <div className="create-project-title-div">
          <label htmlFor="title"></label>
          <input className="create-project-title" type="text" id="title" placeholder="title" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="content"></label>
          <textarea className="create-project-content" id="content" placeholder="content" onChange={handleChange}></textarea>
        </div>
        <button className="create-project-button">Create Plan</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
