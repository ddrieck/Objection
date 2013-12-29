var express = require('express');


var app = express();

// all environments
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
