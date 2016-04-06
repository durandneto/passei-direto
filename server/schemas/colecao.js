var mongoose = require('mongoose');

var colecaoSchema = {
  _id: { 
    type: String 
  }
  ,parent: {
    type: String
    ,ref: 'Colecao'
  }
  ,ancestors: [{
    type: String
    ,ref: 'Colecao'
  }]
};



// module.exports = new mongoose.Schema(colecaoSchema);

var schema = new mongoose.Schema(colecaoSchema); 

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });
 
module.exports = schema;
module.exports.colecaoSchema = colecaoSchema;