import {createStore, combineReducers} from 'redux'

let defaultState = {
  isLogin: false
}

function loginReducer(state = defaultState, action) {
  // return state
  switch (action.type) {
    case 'LOGIN':
        return {
          ...state,
          isLogin: true,
        }
    default:
        return state
  }
}

function userReducer(state = {name: ''}, action) {
  switch (action.type) {
    case 'SETNAME': 
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

const combinedReducers = combineReducers({
  loginReducer,
  userReducer
})


const store = createStore(combinedReducers)

export default store;