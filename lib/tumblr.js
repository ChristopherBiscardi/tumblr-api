	
	//var OAuth= require('./oauthWrapper');
	var OAuth= require('../node_modules/node-oauth').OAuth;
	var http = require('http');
	
	this.apikey = '';
	
	exports.setApiKey = function(apikey) {
		this.apikey = apikey
	}
	exports.setConsumerSecret = function(secret) {
		this.consumer_secret = secret
	};
	
	exports.getBlogInfo = function(args, callback) {

		var options = {
		  host: 'api.tumblr.com',
		  port: 80,
		  path: '/v2/blog/'+args.blogname+'/info?api_key=' + this.apikey,
		  method: 'GET'
		};

		var req = http.request(options, function(res) {
		  res.setEncoding('utf8');
		  res.on('data', function (chunk) {
			  callback(chunk)
		  });
		});

		req.on('error', function(e) {
		  console.log('problem with request: ' + e.message)
		});

		req.end();
	}
	
	//TODO: fix getFollowers
	exports.getFollowers = function(args, callback) {
		console.log(this.apikey)
		console.log(this.consumer_secret);
		var oa= new OAuth('http://www.tumblr.com/oauth/request_token',
		                  'http://www.tumblr.com/oauth/access_token',
		                  this.apikey || args.consumer_secret,
		                  this.consumer_secret || args.consumer_secret,
		                  "1.0",
		                  null,
		                  "HMAC-SHA1");
		console.log(oa)
		oa.get("http://api.tumblr.com/v2/blog/'+args.blogname+'/followers", args.oauth_access_token, args.oauth_access_token_secret,  function (error, data, response) {
		  callback(data)
		});
	};
	
	exports.getPublishedPosts = function(args, callback) {
		
		var path = '/v2/blog/'+args.blogname+'/posts';
		if(args.type){
			path += '/' + args.type;
		}
		path += '?api_key=' + this.apikey;
		
		if(args.params){
			path += '&' + this.serialize(args.params);
		}
				
		var options = {
		  host: 'api.tumblr.com',
		  port: 80,
		  path: path,
		  method: 'GET'
		};

		var req = http.request(options, function(res) {
		  res.setEncoding('utf8');
		  res.on('data', function (chunk) {
			  callback(chunk)
		  });
		});

		req.on('error', function(e) {
		  console.log('problem with request: ' + e.message)
		});

		req.end();
	};

  exports.getQueuedPosts = function(args, callback) {
	  console.log(this.apikey)
		console.log(this.consumer_secret);
		var oa= new OAuth('http://www.tumblr.com/oauth/request_token',
		                  'http://www.tumblr.com/oauth/access_token',
		                  this.apikey || args.consumer_secret,
		                  this.consumer_secret || args.consumer_secret,
		                  "1.0",
		                  null,
		                  "HMAC-SHA1");
		console.log(oa)
		oa.get("http://api.tumblr.com/v2/blog/"+args.blogname+"/posts/queue", args.oauth_access_token, args.oauth_access_token_secret,  function (error, data, response) {
		  callback(data)
		console.log(error)
	//	console.log(response)
		});
    };

	this.serialize = function(obj) {
	  var str = [];
	  for(var p in obj)
	     str.push(p + "=" + encodeURIComponent(obj[p]));
	  return str.join("&");
	}