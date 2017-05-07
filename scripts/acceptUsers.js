require('dotenv').load();
var mongoose        = require('mongoose');
var database        = process.env.MONGO_URL || "mongodb://localhost:27017";
var jwt             = require('jsonwebtoken');
mongoose.Promise = global.Promise;
mongoose.connect(database);

var UserController = require('../app/server/controllers/UserController');

var user = { email: process.env.ADMIN_EMAIL };

var userArray = require('fs').readFileSync('accepted.txt').toString().split('\n');
var count = 0;
userArray.forEach(function (id) {
  UserController.admitUser( id, user, function() {
    count += 1;
    if (count == userArray.length) {
      console.log("Done");
    }
  });
});
