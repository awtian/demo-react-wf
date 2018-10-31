import React, { Component } from 'react';
import {connect} from 'react-redux';
import UpdateNameAction from '../actions/Updatename'

class About extends Component {
  render() {
    const {name, isLogin, changeName, lastUpdate} = this.props
    return (
      <div>
        <h1>This is about page</h1>
        <h2>  {isLogin ? `Logged in as ${name}` : 'logged out'}  </h2>
        <input value={name} onChange={(e) => { changeName(e.target.value) } }></input>
        <h3>Updated at: {lastUpdate}</h3>
      </div>
    );
  }
}

const mapStateToProps =  (state) => {
  return {
    isLogin : state.Login.isLogin,
    name: state.Name.name,
    lastUpdate: state.Name.lastUpdated
  }
} 

const mapDispatchToProps = (dispatch) => {
  return { 
    changeName: (name) =>  dispatch(UpdateNameAction(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
