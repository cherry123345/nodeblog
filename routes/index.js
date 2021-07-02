var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var db = require('monk')('mongodb+srv://taskapp:*****@cluster0.4gkwg.mongodb.net/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=true/nodeblog');

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var posts = db.get('posts');
  posts.find({}, {}, function(err, posts){
    res.render('index', { posts: posts });
  })
});

module.exports = router;
