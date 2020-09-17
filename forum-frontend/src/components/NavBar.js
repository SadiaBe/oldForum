import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';



class NavBar extends React.Component {
render() {
  return (
    <div class="nav-bar"> 
    {/* <Login/>
    <Signup/> */}
        <ul>
        <a href="/login">
          <a tabIndex="0" className="is-rounded is-white button">
            <span>Login</span>
          </a>
        </a>
        <a href="/signup">
          <a tabIndex="1" className="is-rounded is-white button">
            <span>Sign up</span>
          </a> 
        </a>
        </ul>
       
    </div> 
  );
}
}
export default NavBar;
