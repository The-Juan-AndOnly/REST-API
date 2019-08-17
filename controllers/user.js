// User Model
const User = require('../models/User');
// bcrypt for password hashing
const bcrypt = require('bcryptjs');

// Express Validator
const { check, validationResult } = require('express-validator');

// Get All Users
exports.getUsers = async (req, res, next) => {
  try {
    const Users = await User.findAll();
    // .then(Users => res.json({ Users }));
    return res.json({ Users });
  } catch (err) {
    console.log(err);
  }
};

// User Validation
exports.validate = method => {
  switch (method) {
    case 'addUser': {
      return [
        check('firstName', 'Please include First Name').exists(),
        check('lastName', 'Please include Last Name').exists(),
        check('emailAddress', 'Please enter a valid Email').isEmail(),
        check(
          'password',
          'Please enter a password with 7 or more characters'
        ).isLength({ min: 7 })
      ];
    }
  }
};

// Add a Single User
exports.addUser = async (req, res, next) => {
  const { firstName, lastName, emailAddress, password } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    // See if user exists
    let user = await User.findOne({ where: { emailAddress: emailAddress } });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    //  Encrypt PassWord
    const salt = await bcrypt.genSalt(10);
    const saltedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      firstName,
      lastName,
      emailAddress,
      password: saltedPassword
    });

    res
      .status(201)
      .location('/')
      .end();
    // Return something
  } catch (err) {
    return next(err);
  }
};
