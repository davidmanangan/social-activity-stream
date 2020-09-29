const { request } = require('express');
var express = require('express');
var router = express.Router();

var posts = require('../services/posts');

router.post('/new',function(req,res,next){
    
    posts.insert(req.body,next);
    let resObj = {
        action : "post",
        status: "OK"
    }

    res.send(resObj);

});

router.post('/query',function(req,res,next){
    
    if(req.body && req.body.user){
        console.log(req.body.user);
        posts.getBy(req.body.user,function(err,result){
            res.send(result);
        });
    }else{
        let resObj = {
            action : "post",
            status: "OK"
        }
        res.send(resObj);
    }




});


module.exports = router;