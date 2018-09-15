import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, NavLink} from 'react-router-dom';

import Login from '../components/Login';
import Friends from '../components/Friends';
import Messages from '../components/Messages';
import Posts from '../components/Posts';
import Switch from 'react-router-dom/Switch';
import TopNav from '../components/Navigation/TopNav';
import Dashboard from '../components/Dashboard';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <ProtectedRoute path='/posts' component={Posts} />
            <ProtectedRoute path='/messages' component={Messages} />
            <ProtectedRoute path='/friends' component={Friends} />
            <Route path='/' component={Login} />
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

 return props.component

}

export default App;
