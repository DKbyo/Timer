var express = require('express');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
//app.use(express.session());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/login');
});

app.get('/index', function(request, response) {
  response.render('pages/index');
});


require('./api/auth')(app,pg);
require('./api/activity')(app,pg);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app

