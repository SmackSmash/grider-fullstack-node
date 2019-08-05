import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../../actions';

const Payments = ({ handleToken }) => {
  return (
    <StripeCheckout
      name='Emailer'
      description='$5 for 5 email credits'
      amount={500}
      token={handleToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='waves-effect waves-light btn'>Add Credits</button>
    </StripeCheckout>
  );
};

export default connect(
  null,
  { handleToken }
)(Payments);
