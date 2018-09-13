import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../store/actions';

class Login extends Component{

  handleSignin = (callback) => {

    const {history,location,login} = this.props;

    login({username:"rj",password:"12345"})

    // callback();

    // if(location.state){
    //   if(location.state.from) {
    //     history.replace(location.state.from);
    //     return false
    //   }
    // }

    // history.replace('/dashboard');

  }

  render() {

    console.log(this.props);

    const {signin} = this.props;
    return (
      <div>
        <label htmlFor="username">
          <input type="text" name="username" id="username" placeholder="password" />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" id="password" />
        </label>
        <a onClick={()=>this.handleSignin(signin)} >Login</a>
      </div>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    login : ({username,password})=> dispatch(actions.signin({username,password}))
  }
}

export default withRouter(connect(mapStateToProp,mapDispatchToProps)(Login));