const Sequelize = require('sequelize');
const { connection } = require('./index.js');

const Question = connection.define( 'question', {
    user_id: Sequelize.INTEGER,
    restaurant_id: Sequelize.INTEGER,
    text: Sequelize.STRING,
    parent_id: Sequelize.INTEGER,
    helpful: Sequelize.INTEGER
});

const User = connection.define( 'user', {
    username: Sequelize.STRING,
    imageUrl: Sequelize.STRING
});


connection.sync()
  .then(() => {
      console.log('Successfully created tables!')
  })
  .catch(err => {
      console.log('Error inserting tables...', err);
  })


  module.exports = {
      User,
      Question
  }
