var posts = require('../models/posts');

exports.insert = function insert(post,cb){
    posts.insert(post, cb);
}

exports.getBy = function getBy(user,cb){
    return posts.getMsgBy(user,cb);
}