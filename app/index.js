var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('passei-direto.components', ['ng']);

_.each(controllers, function(controller, name) {
  components.controller(name, controller);
});

_.each(directives, function(directive, name) {
  components.directive(name, directive);
});

_.each(services, function(factory, name) {
  components.factory(name, factory);
});

var app = angular.module('passei-direto', ['passei-direto.components', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) { 

  $urlRouterProvider.otherwise("/colecao/Rock");

      // Now set up the states
  $stateProvider
    .state('colecao', {
      url: "/colecao/{colecao}",
      templateUrl: '/templates/colecao_view.html' 
    })
    .state('checkout', {
      url: "/checkout/{id}",
      template: "<checkout></checkout>",
    }); 
    // .state('state2', {
    //   url: "/state2",
    //   templateUrl: "partials/state2.html"
    // })
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //     $scope.things = ["A", "Set", "Of", "Things"];
    //   }
    // });


});
