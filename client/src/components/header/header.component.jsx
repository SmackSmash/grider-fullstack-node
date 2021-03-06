import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from '../../components/payments/payments.component';
import './header.styles.scss';

const Header = ({ auth }) => {
  const renderLogo = () => {
    switch (auth) {
      case null:
      case false:
        return (
          <Link to='/' className='brand-logo'>
            Emailer
          </Link>
        );
      default:
        return (
          <Link to='/surveys' className='brand-logo'>
            Emailer
          </Link>
        );
    }
  };

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

  const renderNav = () => {
    switch (auth) {
      case null:
      case false:
        return;
      default:
        return (
          <>
            <li>
              <NavLink to='/surveys' activeClassName='active'>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/surveys/new' activeClassName='active'>
                New Survey
              </NavLink>
            </li>
            <li>
              <Payments />
            </li>
            <li className='credits'>{auth.credits}</li>
          </>
        );
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        {renderLogo()}
        <ul className='right hide-on-med-and-down'>
          {renderNav()}
          <li>{renderLogin()}</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
