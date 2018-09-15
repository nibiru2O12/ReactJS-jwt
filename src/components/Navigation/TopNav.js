import React from 'react'
import {NavLink} from'react-router-dom';

const TopNav = () => {
  return(
    <ul style={{padding:"10px",listStyle:"none"}}>
      <NavItem to='dashboard'>Dashboard</NavItem>
      <NavItem to='posts'>Posts</NavItem>
      <NavItem to='messages'>Messages</NavItem>
      <NavItem to='login'>Login</NavItem>
    </ul>
  )
}

const NavItem = props => {
  return(
    <li style={{padding:"10px"}}>
      <NavLink to={props.to}>{props.children}</NavLink>
    </li>
  )
}

export default TopNav