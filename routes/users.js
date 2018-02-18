var express = require('express');
var router = express.Router();

var users = [
    {
        name: "fred", age: 23
    },
    {
        name: "bob", age: 45
    },
    {
        name: "larry", age: 56
    },
    {
        name: "burt", age: 78
    }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
