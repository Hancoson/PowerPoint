/**
 * Created by Guoxing.han on 2016-4-27.
 */

var path         = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '/')));
//app.use(express.static(__dirname + '/'));
app.listen(8088);
console.log('Server running at http://localhost:8088/');