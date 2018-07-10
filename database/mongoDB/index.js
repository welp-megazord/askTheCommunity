const mongoose = require('mongoose');


const db = mongoose.connect('mongodb://ec2-54-218-34-185.us-west-2.compute.amazonaws.com:80/practice', {}).then(() => {
  console.log('Connected to Database!');
});

module.exports.db = db;