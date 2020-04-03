const express = require('express');
const router = express.Router();


/* Astronomy Info by latitude + longitude */
const apiURL = 'https://api.ipgeolocation.io/astronomy';
const apiKEY ='409a9d190f8d42e08f26c57cee1dfe4c';
const latboston = '42.3601'; const longboston = '71.0589';

const lastURL = apiURL + '?apiKey='+apiKEY+'&long='+longboston+'&lat='+latboston;

router.get('/get-astronomy', function(req, res, next) {
    const request = require('request');
    const options = {
        'method': 'GET',
        'url': 'https://api.ipgeolocation.io/astronomy?apiKey=409a9d190f8d42e08f26c57cee1dfe4c&long=42.3601&lat=71.0589',
        'headers': {
            'Cookie': '__cfduid=d2be816a4bae146bc51f641cea727e3031585890934'
        },
        form: {}
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(body);
    });
});

module.exports = router;


