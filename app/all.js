var express = require('express');
var app = express();
app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');

app.get('/', function(req,res){
  res.render('index.html');
});

app.get('/umJson', function(req,res){
  res.send({ nome: 'um objeto json', data: new Date(), nascidoEm: {cidade: 'Maringa', estado: 'PR'}});
});

app.get('/angular', function(req,res){
  res.render('exemploAngular.html');
});

var http = require('http');
var server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log('Server listening on port %d', app.get('port'));
});