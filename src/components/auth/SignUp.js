import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

const SignUp = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    props.signUp(state);
  }
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }
  const { auth, authError } = props;
  if (auth.uid) return <Redirect to='/' />
  return (
    <div>
      <div className="signup-form-wrapper">
        <form onSubmit={handleSubmit}>
          <h4 className="signup-form-header">Create Account</h4>
          <div>
            <label htmlFor="email"></label>
            <input className="signup-form-email" type="email" id="email" placeholder="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input className="signup-form-password" type="password" id="password" placeholder="password" onChange={handleChange} minLength="6" />
          </div>
          <div>
            <label htmlFor="firstName"> </label>
            <input className="signup-form-firstN" type="text" id="firstName" placeholder="first name" onChange={handleChange} minLength="1" />
          </div>
          <div>
            <label htmlFor="lastName"> </label>
            <input className="signup-form-lastN" type="text" id="lastName" placeholder="last name" onChange={handleChange} minLength="1" />
          </div>
          <button className="signup-form-button">Sign Up</button>
          <div>{authError ? <p>{authError.message}</p> : null}</div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
