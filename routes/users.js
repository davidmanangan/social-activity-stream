var express = require('express');
var router = express.Router();

var users = require('../services/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let responseObj = {
    action: "user endpoint health check",
    status:"OK"
  }
  res.send(responseObj);
});

router.post('/new',function(req,res,next){
  console.log(req.body)
  if(req.body && req.body.email){
    users.insert(req.body);
    let responseObj = {
      action: "user inserted",
      status:"OK"
    }
    res.send(responseObj);
  }else{
    let responseObj = {
      action: "incorrect json format",
      status:"NOK"
    }
    res.send(responseObj);
  }

});

module.exports = router;
