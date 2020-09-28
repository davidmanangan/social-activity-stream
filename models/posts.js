var posts = require('../config/couchdb').use('posts');


exports.insert = function insert(post,cb){
    posts.insert(post,cb);
}