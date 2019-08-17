// basic-auth
const auth = require('basic-auth');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    // Parse user's credential from Auth Header
    const credentials = auth(req);

    // Check to see if user credential available
    if (credentials) {
      // Attempt to retrieve the user from data store
      // by their username
      // from auth header
      const user = await User.findOne({
        where: { emailAddress: credentials.name }
      });

      // If a user was successfully retrieved
      if (user) {
        // Compare the user password from database to the password in Auth header
        const authenticated = await bcrypt.compare(
          credentials.pass,
          user.password
        );

        if (authenticated) {
          req.currentUser = user;
          console.log('Authenticated');
        } else {
          return res
            .status(401)
            .json({ errors: [{ msg: 'Authentication failure' }] });
        }
      } else {
        return res.status(401).json({ errors: [{ msg: 'User not Found' }] });
      }
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: 'Auth header not Found' }] });
    }

    // call next method
    next();
  } catch (err) {
    res
      .status(401)
      .json({ errors: [{ msg: 'Access Denied' }] })
      .end();
  }
};
