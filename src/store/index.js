import { createStore, combineReducers } from 'redux'; 
import Login from '../reducers/login'
import Name from '../reducers/name'

const reducers = combineReducers({
  Login, Name
})

const store = createStore(reducers);

export default store;