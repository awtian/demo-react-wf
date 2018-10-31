import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/'

import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import About from './container/About';
import NotFound from './container/NotFound';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="links">
              <Link
                className="App-link"
                to="/"
              >
                Home
              </Link> |&nbsp;
              <Link
                className="App-link"
                to="/about"
              >
                About
              </Link>
              </div>
            </header>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/About' exact component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
