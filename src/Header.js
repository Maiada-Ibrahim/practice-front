import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LoginButton from './compo/LoginButton';
import LogoutButton from './compo/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
// import withAuth0(Profile) from './compo/Profile';




import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/myfav">my fav</Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
         {/* ({this.props.auth0.isAuthenticated} == true)? <LogoutButton/> :  <LoginButton/> */}
               {
                  this.props.auth0.isAuthenticated ? <LogoutButton/>:<LoginButton/>
              }
      </Navbar>
    );
  }
}

// export default Header;
export default withAuth0(Header);