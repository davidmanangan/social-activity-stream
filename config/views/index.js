var async = require('async');
var equal = require('deep-equal');
var couch = require('../couchdb');

var databaseNames = ['posts'];

var views = {};

databaseNames.forEach(function(database){
    views[database] = require('./'+database)
});

exports.populate = function populate(cb){
    async.each(databaseNames,populateDB,cb);
}

function populateDB(dbName,cb){
    var db = couch.use(dbName);
    var dbViews = views[dbName];

    /** loop through exported keys of javascript files inside views folder*/
    async.eachSeries(Object.keys(dbViews),ensureView,cb);

    function ensureView(viewName,cb){
        var view = dbViews[viewName];

        var designDocName = '_design/'+viewName;
        db.get(designDocName, function(err,designDoc){
            if(err && err.statusCode == 404){
                insertDesignDoc(null,cb);
            }
            else if(err){
                cb(err);
            }
            else if(equal(designDoc.views[viewName],view)){
                cb();
            }
            else{
                insertDesignDoc(designDoc,cb);
            }
        });

        function insertDesignDoc(desDoc,cb){
            if(!desDoc){
                desDoc = {
                    language : 'javascript',
                    views:{}
                };
            }
            desDoc.views[viewName] = view;

            db.insert(desDoc,designDocName,function(err){
                if(err && err.statusCode == 409){
                    ensureView(viewName,cb);
                }
                else{
                    cb(err);
                }
            });
        }
    }
}


