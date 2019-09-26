import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(state);
    if (auth.uid) return <Redirect to='/' />
  }
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }
  const { authError, auth } = props;
  if (auth.uid) return <Redirect to='/' />
  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit}>
        <h4 className="login-form-header" >Log In</h4>
        <div >
          <label htmlFor="email"></label>
          <input className="login-form-email" type="email" id="email" placeholder="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input className="login-form-password" type="password" id="password" placeholder="password" onChange={handleChange} minLength="4" />
        </div>
        <button className="login-form-button">Login</button>
        <div>
          {authError ? <p>{authError.message}</p> : null}
        </div>
        <p className="placeholder-text">Use email: 123@gmail.com ; password: 123456 for testing</p>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
