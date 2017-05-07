// Connect to mongodb
var mongoose        = require('mongoose');
var database        = process.env.MONGO_URL || "mongodb://localhost:27017";
mongoose.connect(database);

var UserController = require('../app/server/controllers/UserController');

var users = 1000;
var username = 'hacker';

for (var i = 0; i < users; i++){
  console.log(username, i);
  UserController
    .createUser(username + i + '@school.edu', 'foobar', function(){
    console.log(i);
    });
}
