var users = require('../models/users');

exports.insert = function insert(user,cb){
    users.insert(user,cb);
}