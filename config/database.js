var async = require('async');
var couch = require('./couchdb');

var databases = ['users','posts'];

function initCouch(cb){
    createDatabases(cb);
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

module.exports = initCouch