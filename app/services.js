var status = require('http-status');

exports.$user = function($http) {
  var s = {};

  s.loadUser = function() {
  /*TODO*/
  };

  s.loadUser();

  setInterval(s.loadUser, 60 * 60 * 1000);

  return s;
};
