var express = require('express');
var router = express.Router();

var counter = 1;

var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

/* GET users listing. */
router.post('/add', function(req, res, next) {
  console.log(req.headers["content-type"]);
  var newUser = {
    id: counter++,
    name: req.body.name,
    age: req.body.age
  };
  users.push(newUser);
  if (req.body.fullReply) {
    res.json(users);
  }
  else {
    res.json(newUser);
  }
});

module.exports = router;
