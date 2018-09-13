import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Login extends Component{

  handleSignin = (callback) => {

    const {history,location} = this.props;

    callback();

    if(location.state){
      if(location.state.from) {
        history.replace(location.state.from);
        return false
      }
    }

    history.replace('/dashboard');

  }

  render() {

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

export default withRouter(Login);