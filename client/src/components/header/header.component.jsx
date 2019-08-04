import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' exact className='brand-logo'>
          Emailer
        </Link>
        <ul className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/dashboard' exact activeClassName='active'>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/survey-new' exact activeClassName='active'>
              New Survey
            </NavLink>
          </li>
          <li>
            <NavLink to='/auth/google' exact activeClassName='active'>
              Sign in with google
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
