import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import Login from '../reducers/login'
import Name from '../reducers/name'
import person from '../reducers/person'

const reducers = combineReducers({
  Login, Name, person
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
  );

export default store;