var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var _ = require('underscore');

module.exports = function(wagner) {
  var api = express.Router();

  api.use(bodyparser.json());

  /* colecao API */

  /**
  * @description: Esta funcao recebe um id como parametro e procura no documento do 
  * mongo(colecaos) pela chave primaria
  * @params: ID string ex: Rock, Pop
  * @return: Object
  * @developer : Durand Neto
  */
  api.get('/colecao/:id', wagner.invoke(function(Colecao) {
    return function(req, res) {
      Colecao.findOne({ _id: req.params.id }, function(error, colecao) {
        if (error) {
          return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: error.toString() });
        }
        if (!colecao) {
          return res.
            status(status.NOT_FOUND).
            json({ error: 'Not found' });
        }
        res.json({ colecao: colecao });
      }); 


    };
  })); 


  /**
  * @description: Esta funcao recebe um id como parametro e procura no documento do 
  * mongo(colecaos) pela pai da colecao, para trazer todas as colecoes de segundo nivel
  * @params: ID string ex: Rock, Pop
  * @return: array
  * @developer : Durand Neto
  */
  api.get('/colecao/parent/:id', wagner.invoke(function(Colecao) {
    return function(req, res) {
      console.log(req.params.id);
      Colecao.
        find({ parent: req.params.id }).
        sort({ _id: 1 }).
        exec(function(error, colecoes) {
          if (error) {
            return res.
              status(status.INTERNAL_SERVER_ERROR).
              json({ error: error.toString() });
          }
          res.json({ colecoes: colecoes });
        });
    };
  }));

  /* Disco API */

    /**
  * @description: Esta funcao recebe um id como parametro e procura no documento do 
  * mongo(discos) pelo id do disco
  * @params: ID string ex: mongodb _ID
  * @return: Object
  * @developer : Durand Neto
  */
  api.get('/disco/:id', wagner.invoke(function(Disco) {
    return function(req, res) {
      Disco.findOne({ _id: req.params.id },
        handleOne.bind(null, 'disco', res));
    };
  }));
    /**
  * @description: Esta funcao recebe um id como parametro e procura no documento do 
  * mongo(discos) por todos os discos de uma colecao que tenha como id o parametro passado
  * @params: ID string ex: Rock, Anita
  * @return: Array
  * @developer : Durand Neto
  */
  api.get('/disco/colecao/:id', wagner.invoke(function(Disco) {
    return function(req, res) {
      var sort = { name: 1 };
      // if (req.query.price === "1") {
      //   sort = { 'internal.approximatePriceUSD': 1 };
      // } else if (req.query.price === "-1") {
      //   sort = { 'internal.approximatePriceUSD': -1 };
      // }

      Disco.
        find({ 'colecao.ancestors': req.params.id }).
        sort(sort).
        exec(handleMany.bind(null, 'discos', res));
    };
  }));

    /* Stripe Checkout API */
  /**
  * @description: Esta funcao recebe um id como parametro e procura no documento do 
  * mongo(discos) por um disco especifico para pegar o valor do disco e criar um objeto do striper par efetuar a venda
  * @params: discoId string ex: mongoDB _id
  * @params: stripeToken string ex: Striper token
  * @return: Object com o id dad transacao do striper
  * @developer : Durand Neto
  */
  api.post('/checkout', wagner.invoke(function(Stripe,Disco) {
    return function(req, res) {

      Disco.findOne({ _id: req.body.discoId},function(err,disco){
        var totalCostUSD = disco.price;
      // And create a charge in Stripe corresponding to the price
        Stripe.charges.create({
          // Stripe wants price in cents, so multiply by 100 and round up
          amount: Math.ceil(totalCostUSD * 100),
          currency: 'usd',
          source: req.body.stripeToken,
          description: 'Example charge'
        },
        function(err, charge) {
          if (err && err.type === 'StripeCardError') {
            return res.
            status(status.BAD_REQUEST).
            json({ error: err.toString() });
          }
          if (err) {
            console.log(err);
            return res.
            status(status.INTERNAL_SERVER_ERROR).
            json({ error: err.toString() });
          }
          return res.json({ id: charge.id });
        });
      });
    };
  }));
 

  /* text search API */

  /**
  * @description: Esta funcao recebe uma string como parametro e procura no documento do 
  * mongo(discos) por todos discos que conheca a string e os "rankeia" por score
  * @params: query string ex: Rock, Anita, 2012, DVD
  * @return: Array com os discos encontrados
  * @developer : Durand Neto
  */
  // api.get('/disco/titulo/:query', wagner.invoke(function(Disco) {
  //   return function(req, res) {
  //     /**
  //     * TODO
  //     */
  //     // Disco.
  //     //   find(
  //     //     { $text : { $search : req.params.query } },
  //     //     { score : { $meta: 'textScore' } }).
  //     //   sort({ score: { $meta : 'textScore' } }).
  //     //   limit(10).
  //     //   exec(handleMany.bind(null, 'discos', res));
  //   };
  // }));

  return api;
};


  /**
  * @description: Funcao generica para para padronizar o retorno singular da api
  * @developer : Durand Neto
  */
function handleOne(property, res, error, result) {
  if (error) {
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }
  if (!result) {
    return res.
      status(status.NOT_FOUND).
      json({ error: 'Not found' });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}

  /**
  * @description: Funcao generica para para padronizar o retorno array da api
  * @developer : Durand Neto
  */
function handleMany(property, res, error, result) {
  if (error) {
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}


