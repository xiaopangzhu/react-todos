var path = require('path');
var express = require('express');

var app = express();

app.use(express.static('./views')).listen(3000);
app.use(express.static(path.join(__dirname, 'public')));

console.log('imooc started on port 3000');
