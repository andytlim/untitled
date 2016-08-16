var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample/react', function(req, res, next) {
  res.render('sample-react', { title: 'React Example' });
});

module.exports = router;
