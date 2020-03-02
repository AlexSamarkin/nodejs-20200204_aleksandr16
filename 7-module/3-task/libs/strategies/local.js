const User = require('../../models/User');
const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy(
    {usernameField: 'email', session: false},
    async function(email, password, done) {
      try {
        const user = await User.login(email, password);
        return done(null, user);
      } catch (e) {
        return done(null, false, e.message);
      }
    }
);
