var express = require('express');
var Twitter = require('twitter');
var router = express.Router();
var path = require('path')

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


// console.log(process.env);

router.get('/app/tweets', function(req, res, next) {
  var params = {screen_name: 'maccladie'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      //console.log(tweets)
      res.send(tweets)
    }
  });
});

router.get('/app/followers', function(req, res, next) {
  var params = {screen_name: 'maccladie', count: 200};
  client.get('followers/list', params, function(error, followers, response){
    if(error) throw error;
    res.send(followers.users);
  });
});

router.get('/app/corc-tweets', function(req, res, next) {
  twitter.get('search/tweets', { q: "Corcoran Real Estate"}, function(error, tweets, response){
    if(error) throw error;
    res.send(tweets.statuses);
  });
});

router.get('/stream', function(req, res, next) {
  var params = {track: 'NYC'};
  client.stream('statuses/filter', params, function(stream) {
    stream.on('data',function(tweet){
      console.log(tweet);
    });
    stream.on('error',function(error){
      throw error;
    });
  });
});

router.get('/rate_limits', function(req, res, next) {
  twitter.get('application/rate_limit_status', { screen_name: "corcorangroup"}, function(error, limits, response){
    if(error) throw error;
    res.send(limits);
  });
});

module.exports = router;
