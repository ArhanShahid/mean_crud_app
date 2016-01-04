// set up ======================================================================
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('static-favicon');
var path = require('path');
var mongoose = require('mongoose');

var app      = express();


app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT

if ('development' == app.get('env')){
    app.use(errorHandler());
}


app.set('port', process.env.PORT || 3000);

// routes ======================================================================

require('./server/config')(app);
require('./server/db/repository')(app,mongoose);
require('./server/models')(app,mongoose);
require('./server/api')(app,mongoose);
require('./server/routes')(app);

// listen (start app with node server.js) ======================================

app.listen(app.get('port'),function(){
    console.log('Express App server listening on Port :' + app.get('port'));
});

