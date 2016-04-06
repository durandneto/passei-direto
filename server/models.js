var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function(wagner) {
  var mongoURI = "mongodb://127.0.0.1:27017/passeidireto";
  var MongoDB = mongoose.connect(mongoURI).connection;
  MongoDB.on('error', function(err) { console.log(err.message); });
  MongoDB.once('open', function() {
    console.log("mongodb connection open");
  });



  wagner.factory('db', function() {
    return mongoose;
  });

  var Colecao = mongoose.model('Colecao', require('./schemas/colecao'), 'colecaos');
  var Disco = mongoose.model('Disco', require('./schemas/disco'), 'discos');
   
  var models = {
    Colecao: Colecao ,
    Disco: Disco ,
  };

  // Registra todos os models do mongodb para utilizar na api
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });
 

  return models;
};
