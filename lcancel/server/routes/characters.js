var express = require('express');
var router = express.Router();

/* GET characters listing. */
router.get('/characters', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
