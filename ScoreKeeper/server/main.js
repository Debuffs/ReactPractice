//import './../imports/utils';
import {greetUser} from './../imports/utils';
import add from './../imports/math';

//**********************************************************************
//  Enter the Twitter handle below (var twitterHandle = 'BBCBreaking') to
//  see a Sentiment Analysis of the first 10 tweets.
//  :-) = positive, :-| = neutral, :-( = negative
//**********************************************************************

let AYLIENTextAPI = require('aylien_textapi'),
  		request = require('request'),
  		cheerio = require('cheerio');
let textapi = new AYLIENTextAPI({
  application_id: 'c6b987ff',
  application_key: '13b7ba5303c8698dadd50c0edf66ce4f'
});

let twitterHandle = 'BBCBreaking';

function sentimentToSmiley(sentiment) {
  if(sentiment === "neutral") { return ':-|' }
  if(sentiment === "negative") { return ':-(' }
  else { return ':-)' }
}

function sentiment(text, callback) {
	textapi.sentiment(text, function(err, resp) {
  	if (err !== null) {
    	console.log("Error: " + err);
  	} else {
    	callback(resp.polarity);
  	}
	});
}

request('https://www.twitter.com/' + twitterHandle, function(err, response) {
  let $ = cheerio.load(response.body);
  let i = 0;
  $('.tweet-text').toArray().forEach(function(item) {
    let text = $(item).text();
    if(i < 10){
      i++;
    sentiment(text, function(results) {
      console.log(sentimentToSmiley(results), '-', text.replace(/\n/g, ' '));
    });

    } else {return}

  });
});

console.log('Log from /server/main.js');
