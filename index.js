var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');

  var promise = {
  'var'  : 'texting',
  'array': [1, 2, 3, 4]
};

//console.log(promise['array']);
//console.log('Arrrrrrr');
res.send(promise.var);
});


//more comments
/*
app.get('/w', function (req, res) {
  res.send('Hello Double Yuu!');
});
//app.use(express.static())

*/

app.listen(4000, function () {
  console.log('Herroworld listening on port 4000!');
  //console.log('Dir name is ' + __dirname);
});
