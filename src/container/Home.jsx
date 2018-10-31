import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginAction from '../actions/Login';

class Home extends Component {
  login () {
    console.log('hello')
  }
  
  render() {
    return (
      <div>
        <h1>This is the Home page</h1>
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.loginReducer.islogin
})

const mapDispatchToProps = dispatch => ({
  login : () => dispatch(LoginAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
