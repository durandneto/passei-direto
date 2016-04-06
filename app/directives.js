 exports.addToCart = function() {
  return {
    controller: 'CartController',
    templateUrl: '/templates/add_to_cart.html'
  };
};

exports.colecaoDiscos = function() {
  return {
    controller: 'ColecaoDiscosController',
    templateUrl: '/templates/colecao_discos.html'
  }
};

exports.colecaoTree = function() {
  return { 
    controller: 'ColecaoTreeController',
    templateUrl: '/templates/colecao_tree.html'
  }
};

exports.checkout = function() {
  return {
    controller: 'CheckoutController',
    templateUrl: '/templates/checkout.html'
  };
};

exports.navBar = function() {
  return {
    controller: 'NavBarController', 
    templateUrl: '/templates/nav_bar.html'
  };
};

exports.discoDetails = function() {
  return {
    controller: 'DiscoDetailsController',
    templateUrl: '/templates/disco_details.html' 
  };
};
