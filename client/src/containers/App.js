import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, NavLink} from 'react-router-dom';

import Login from '../components/Login';
import Friends from '../components/Friends';
import Messages from '../components/Messages';
import Posts from '../components/Posts';
import Switch from 'react-router-dom/Switch';
import TopNav from '../components/Navigation/TopNav';
import Dashboard from '../components/Dashboard';

class App extends Component {

  handleSignout = () => {
    this.setState({isAuth:false})
  }

  render() {

    const {isAuth} = this.props;

    return (
      <Router>
        <div className="App">
          <TopNav isAuth={isAuth} signout={this.handleSignout} />
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <ProtectedRoute path='/posts' isAuth={isAuth} component={Posts} />
            <ProtectedRoute path='/messages' isAuth={isAuth} component={Messages} />
            <ProtectedRoute path='/friends' isAuth={isAuth} component={Friends} />
            {
              !isAuth && <Route path='/' component={()=><Login />} />
            }
          </Switch>
        </div>
      </Router>
    );
  }
}

const ProtectedRoute = props => {
  const {isAuth} = props;

 if(!isAuth){
  return (
    <div>
      <h1>Protected Route</h1>
      <p>you must be logged-in to view this page</p> 
      <NavLink to={{pathname:"/",state:{from:props.path}}} >Log in</NavLink>
    </div>
  )
 }

 return <Route path={props.path} component={props.component} />

}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(App);
