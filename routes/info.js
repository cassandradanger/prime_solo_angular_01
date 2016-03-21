var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../public/data/data.json'));
});

module.exports = router;