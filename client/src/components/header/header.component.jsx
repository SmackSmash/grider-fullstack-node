import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const renderLogin = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <a href='/auth/google'>Sign in with google</a>;
      default:
        return <a href='/api/logout'>Sign out</a>;
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
