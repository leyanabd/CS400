var express = require('express');
var router = express.Router();

/* GET fixed string */
router.get('/', function(req, res, next) {
    res.render('ps3', {string: 'Hey! How are you doing?'});
});

/* POST string and length */
router.post('/', function(req, res, next) {
    res.render('ps3', {string: req.body.title, length: req.body.title.length});
});

module.exports = router;
