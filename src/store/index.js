import { createStore, combineReducers } from 'redux'; 
import Login from '../reducers/login'
import Name from '../reducers/name'
import person from '../reducers/person'

const reducers = combineReducers({
  Login, Name, person
})

const store = createStore(reducers);

export default store;