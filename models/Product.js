const Sequelize = require('sequelize/index');

const sequelize = require('../db/database');

// Create User Table
const User = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'First Name is required' }
    }
  },
  lastName: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'First Name is required' }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'First Name is required' }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'First Name is required' }
    }
  }
});

module.exports = User;
