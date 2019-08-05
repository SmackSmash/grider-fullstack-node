import React from 'react';
import './dashboard.styles.scss';

const Dashboard = props => {
  return (
    <div>
      Dashboard Works!<p>{process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}</p>
    </div>
  );
};

export default Dashboard;
