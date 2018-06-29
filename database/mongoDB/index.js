const mongoose = require('mongoose');


const db = mongoose.connect('mongodb://localhost/practice', {}).then(() => {
  console.log('Connected to Database!');
});

module.exports.db = db;