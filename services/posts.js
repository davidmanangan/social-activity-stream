var posts = require('../models/posts');

exports.insert = function insert(post,cb){
    posts.insert(post, cb);
}