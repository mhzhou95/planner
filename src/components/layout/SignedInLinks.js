import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul>
      <li className="nav-link"><NavLink to='/create' activeClassName="active">New Plan</NavLink></li>
      <li className="nav-link" id="nav-link-out"><a onClick={props.signOut}> Log Out</a></li>
      <li className="nav-link" id="initials-link">{props.profile.initials}</li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);