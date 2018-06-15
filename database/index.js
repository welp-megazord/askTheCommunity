const Sequelize = require('sequelize');

const connection = new Sequelize('practice', 'postgres', '', {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres'
});

connection.authenticate()
  .then(() => {
      console.log('Successfully connected to the database')
  })
  .catch(err => {
      console.log('Error connecting to the database...', err);
  })

  module.exports.connection = connection;