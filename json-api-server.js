'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

const app = express();

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

// configure app
app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set headers
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');

	// disable caching
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

// routes
app.get('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

app.listen(app.get('port'));