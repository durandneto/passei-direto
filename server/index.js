var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./config/dependencies')(wagner);

var app = express();


  /**
  * @description: habilitando o CORS para a api funcionar em servidores diferentes
  * @developer : Durand Neto
  * @obs: Por emquanto esta toda aberta, deve-se colcoar apenas os servidores que pordem acessar a api na lista de origins
  */

app.use(function(req, res, next) {
  res.append('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST']);
  res.append('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!');