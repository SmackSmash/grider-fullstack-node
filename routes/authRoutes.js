const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send(process.env.MONGO_URI || 'Routes still work!');
  });

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user || 'Logged out successfully');
  });

  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user || 'No user signed in');
  });
};
