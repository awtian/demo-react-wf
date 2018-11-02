import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import context from './context'

import Home from './container/Home'
import About from './container/About'
import NotFound from './container/NotFound'

class App extends Component {

  state = {
    theme: 'light'
  }

  gantiTheme = () => {
    this.setState({
      theme: "dark"
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <context.Provider value={{theme: this.state.theme, ganti: this.gantiTheme}}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link
                  className="App-link"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="App-link"
                  to="/About"
                >
                  About
                </Link>
              </header>
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/About' exact component={About} />
                  <Route component={NotFound} />
                </Switch>
            </div>
          </context.Provider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
