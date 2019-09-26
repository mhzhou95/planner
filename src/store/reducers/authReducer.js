const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('log in success')
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCESS':
      console.log('signout success')
      return {
        ...state
      }
    case 'LOGIN_ERROR':
      console.log('login failed')
      return {
        ...state,
        authError: action.err
      }
    case 'SIGNUP_SUCCESS':
      console.log('sign in success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('sign up error')
      return {
        ...state,
        authError: action.err
      }
    default:
      return state
  }
}

export default authReducer;