var express = require('express');
var router = express.Router();

var counter = 1;

var users = [
    {
        id: counter++, name: "fred", age: 23
    },
    {
        id: counter++, name: "bob", age: 45
    },
    {
        id: counter++, name: "larry", age: 56
    },
    {
        id: counter++, name: "burt", age: 78
    }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

/* GET users listing. */
router.post('/add', function(req, res, next) {
    console.log(req.headers["content-type"]);
  users.push({
      id: counter++, name: req.body.name, age: req.body.age
  });
  res.json(users);
});

module.exports = router;
