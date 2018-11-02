import React, { Component } from 'react';
import {connect} from 'react-redux';
import UpdateNameAction from '../actions/Updatename'

import Headline from '../components/Headline'
import Button from '../components/Button'

class About extends Component {
  render() {
    const {name, isLogin, changeName, lastUpdate} = this.props
    return (
      <div>
        <Headline>
          <h3>Hai Semua</h3>
          <h5>gw ada dong</h5>
        </Headline>
        <Button />
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
