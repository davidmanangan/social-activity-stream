var users = require('../config/couchdb').use('users');

exports.insert = function insert(user,cb){
    users.insert(user,user.email,cb);
}