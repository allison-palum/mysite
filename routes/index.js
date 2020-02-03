var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    
  });
});

router.get('/photos', function(req, res){
  res.render('photos', {
    title: 'Photos'
  });
});

router.get('/what-im-listening-to', function(req, res){
  res.render('what-im-listening-to', {
    title: 'What I\'m listening to'
  });
});

router.get('/resume', function(req, res){
  res.render('resume', {
    title: 'Resume'
  });
});

module.exports = router;
