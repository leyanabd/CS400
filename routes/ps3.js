var express = require('express');
var router = express.Router();

/* GET fixed string */
router.get('/', function(req, res, next) {
    res.render('ps3', {title: 'Hey! How are you doing?'});
});

/* POST string and length */
router.post('/', function(req, res, next) {
    const ps = {
        string: req.body.title,
        length: req.body.title.length,
    };
    console.log(ps);
    res.render('ps3', {title: JSON.stringify(ps)});
});

module.exports = router;
