const stripe = require('stripe')(require('../config/keys').stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send('Log in ya dummy!');
    }

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
