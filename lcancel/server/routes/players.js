var express = require('express');
var router = express.Router();

/* GET players listing. */
router.get('/players', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
