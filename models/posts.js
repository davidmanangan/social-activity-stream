var posts = require('../config/couchdb').use('posts');


exports.insert = function insert(post,cb){
    posts.insert(post,cb);
}


exports.getMsgBy = function getMsgBy(user,cb){
    posts.view(
        'by_user','by_user', {keys: [user], include_docs:true},
        function (err,result){
            if(err){
                cb(err);
            }else{
                result = result.rows.map(function (row){
                    return row.doc;
                });
                cb(null,result);
            }
        }
    )
}