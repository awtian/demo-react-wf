import React, { Component } from 'react';
import {connect} from 'react-redux'
import getPerson from '../actions/getPerson'

class Home extends Component {
  componentDidMount () {
    this.props.getPerson()
  }

  render() {
    const {person} = this.props
    return (
      <div>
        <h1>This is home container hello</h1>
        <button onClick={this.props.login}>Login</button>
        <button onClick={this.props.logout}>Logout</button>
        <p>{this.props.isLogin ? `hi ${this.props.name}` : 'logged out'}</p>
        <p>{person.loading ? 'loading dulu nich' : JSON.stringify(this.props.person)}</p>
        <p>{person.error ? 'sori gan error' : ''}</p>
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
    getPerson: () => dispatch(getPerson())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
