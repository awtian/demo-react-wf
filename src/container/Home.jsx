import React, { Component } from 'react';
import {connect} from 'react-redux'

import getPerson from '../actions/getPerson'

class Home extends Component {
  componentDidMount () {
    this.props.getPeople()
  }

  render() {
    const {login, logout, person, isLogin, name} = this.props
    return (
      <div>
        <h1>This is home container hello</h1>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <p>{isLogin ? `hi ${name}` : 'logged out'}</p>
        <p>{JSON.stringify(person)}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isLogin: state.Login.isLogin,
    name: state.Name.name,
    person: state.person
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    login: () => dispatch({type: 'LOGIN'}),
    logout: () => dispatch({type: 'LOGOUT'}),
    getPeople: () => dispatch(getPerson())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
