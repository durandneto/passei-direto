exports.CartController = function($scope) {};

exports.ColecaoDiscosController = function($scope, $stateParams, $http) {
  var encoded = encodeURIComponent($stateParams.colecao);

  $scope.price = undefined;

  $scope.handlePriceClick = function() {
    if ($scope.price === undefined) {
      $scope.price = -1;
    } else {
      $scope.price = 0 - $scope.price; 
    }
    $scope.load(); 
  };

  $scope.load = function() {
    var queryParams = { price: $scope.price };
    $http.
      get('http://localhost:3000/api/v1/disco/colecao/' + encoded, { params: queryParams }).
      success(function(data) {
        $scope.discos = data.discos;
      });
  }; 

  $scope.load();
 
  setTimeout(function() {
    $scope.$emit('ColecaoDiscosController');
  }, 0);
};

exports.ColecaoTreeController = function($scope, $stateParams, $http) {
  var encoded = encodeURIComponent($stateParams.colecao);
  $scope.colecao = encoded; 
  $http.
    get('http://localhost:3000/api/v1/colecao/' + encoded).
    success(function(data) {
      $scope.colecao = data.colecao; 
      $http.
        get('http://localhost:3000/api/v1/colecao/parent/' + encoded).
        success(function(data) {
          $scope.children = data.colecoes;
        });
    });

  setTimeout(function() {
    $scope.$emit('ColecaoTreeController');
  }, 0);
};

exports.CheckoutController = function($scope, $stateParams, $http) {
  var encoded = encodeURIComponent($stateParams.id);

  $http.
    get('http://localhost:3000/api/v1/disco/' + encoded).
    success(function(data) {
      $scope.disco = data.disco;
    }); 

   
  Stripe.setPublishableKey('pk_test_ZLZjNU6CpwBV5ZlcJsxne0PA');

  $scope.stripeToken = {
    number: '4242424242424242',
    cvc: '123',
    exp_month: '12',
    exp_year: '2016'
  };

  $scope.checkout = function() {
    $scope.error = null;
    Stripe.card.createToken($scope.stripeToken, function(status, response) {
      if (status.error) {
        $scope.error = status.error;
        return;
      }

      $http.
        post('http://localhost:3000/api/v1/checkout', { stripeToken: response.id , discoId:$scope.disco._id }).
        success(function(data) {
          $scope.checkedOut = true;
        });
    });
  };
};

exports.NavBarController = function($scope, $user) {
  $scope.user = $user;

  setTimeout(function() {
    $scope.$emit('NavBarController');
  }, 0);
};

exports.DiscoDetailsController = function($scope, $stateParams, $http) {
  var encoded = encodeURIComponent($stateParams.id);

  $http.
    get('http://localhost:3000/api/v1/disco/' + encoded).
    success(function(data) {
      $scope.disco = data.disco;
    });

  setTimeout(function() {
    $scope.$emit('DiscoDetailsController');
  }, 0);
};
