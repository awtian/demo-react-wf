let defaultState = {
  isLogin: false
}

function Login (state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true
      }
  
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false
      }
  
    default:
      return state
  }
}

export default Login;