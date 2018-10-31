import React, { Component } from 'react';
import { connect } from 'react-redux';
import SetNameAction from '../actions/SetName'

class About extends Component {
  render() {
    const {isLogin, name, setName} = this.props;
    return (
      <div>
        <h1> This is the About page.</h1>
        <p>{isLogin ? `Logged in as ${name}` : 'You are not logged in'}</p>
        <input type="text" onChange={(e) => { setName(e.target.value) } }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginReducer.isLogin,
  name: state.userReducer.name
})

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(SetNameAction(name))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(About);
