const Sequelize = require('sequelize');

const sequelize = require('../db/database');
const Course = require('./Course');

// Create User Table
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  emailAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
User.hasMany(Course, { foreignKey: 'userId' });
module.exports = User;
