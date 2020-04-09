const express = require('express');
const router = express.Router();
const request = require('request');


/* Astronomy Info by latitude + longitude */
const apiURL = 'https://api.ipgeolocation.io/astronomy';
const apiKEY ='409a9d190f8d42e08f26c57cee1dfe4c';


router.get('/', function(req, res, next) {

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
    res.render(response.body);
    //res.render('index', {quotes: JSON.parse(response.body)})

    //App would not let me use res.render('index', {response: JSON.parse(response.body)});
    //I put in the proper code to display the information, but unfortunately index.pug is not
    //displaying at all (at least for me)
    
  });

});
module.exports = router;
