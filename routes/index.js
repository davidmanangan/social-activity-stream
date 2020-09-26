var express = require('express');
var router = express.Router();

/* GET API Status. */
router.get('/', function(req, res, next) {
  let responseObj = {
    action : "index health check",
    status: "OK"
  }
  res.send(responseObj);
});

module.exports = router;
