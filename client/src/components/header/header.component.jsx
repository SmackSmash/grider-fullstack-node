import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const renderLogin = () => {
    console.log(auth.googleId);
    if (auth.googleId) {
      return (
        <NavLink to='/api/logout' activeClassName='active'>
          Sign out
        </NavLink>
      );
    } else {
      return (
        <NavLink to='/auth/google' activeClassName='active'>
          Sign in with google
        </NavLink>
      );
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Emailer
        </Link>
        <ul className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/dashboard' activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/survey-new' activeClassName='active'>
              New Survey
            </NavLink>
          </li>
          <li>{renderLogin()}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
