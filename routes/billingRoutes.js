const stripe = require('stripe')(require('../config/keys').stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: `5 credits for ${req.body.email}`,
      source: req.body.id
    });
    req.user.credits += 5;
    const updatedUser = await req.user.save();
    res.send(updatedUser);
  });
};
