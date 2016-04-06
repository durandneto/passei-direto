var mongoose = require('mongoose');
var Colecao = require('./colecao');

var discoSchema = {
  title: { 
    type: String
    , required: true 
    , maxlength : 140
  }
  , description: { 
    type: String
    , required: true 
    , maxlength : 500
  }
  , picture: { 
    type: String
    , match: /^http:\/\//i 
  }
  , price: {
     type: Number
     , required: true
  }
  , colecao: Colecao.colecaoSchema
};

var schema = new mongoose.Schema(discoSchema); 
schema.virtual('displayPrice').get(function() {
  return 'R$ '+ this.price;
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

module.exports = schema;
module.exports.discoSchema = discoSchema;