var async = require('async');
var couch = require('./couchdb');
var views = require('./views');

var databases = ['users','posts'];

function initCouch(cb){
    //createDatabases(cb);
    async.series([createDatabases,createViews],cb);
}

function createDatabases(cb){
    async.each(databases,createDatabase,cb)
}

function createDatabase(db,cb){
    couch.db.create(db,function(err){
        if(err && err.statusCode == 412){
            err = null;
        }
        cb(err);
    })
}

function createViews(cb){
    views.populate(cb);
}

module.exports = initCouch