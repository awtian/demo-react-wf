import React, { Component } from 'react';
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is home container hello</h1>
        <button onClick={this.props.login}>Login</button>
        <button onClick={this.props.logout}>Logout</button>
        <p>{this.props.isLogin ? `hi ${this.props.name}` : 'logged out'}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isLogin: state.Login.isLogin,
    name: state.Name.name,
    inipropsbohongan: 'ismail'
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    login: () => dispatch({type: 'LOGIN'}),
    logout: () => dispatch({type: 'LOGOUT'})
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
