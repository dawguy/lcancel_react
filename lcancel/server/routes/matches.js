var express = require('express');
var router = express.Router();

/* GET matches listing. */
router.get('/matches', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
