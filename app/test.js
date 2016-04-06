describe('Nav Bar', function() {
  var injector;
  var element;
  var scope;
  var intercepts;
  var httpBackend;

  beforeEach(function() {
    injector = angular.injector(['passei-direto.components', 'ngMockE2E']);
    intercepts = {};

    injector.invoke(function($rootScope, $compile, $httpBackend) {
      scope = $rootScope.$new();

      $httpBackend.whenGET(/.*\/templates\/.*/i).passThrough();
      httpBackend = $httpBackend;

      element = $compile('<nav-bar></nav-bar>')(scope);
      scope.$apply();
    });
  });

  it('shows logged in users profile picture', function(done) { 
    scope.$on('NavBarController', function() {
      assert.equal(element.find('.title').text().trim(), 'Discos');
      done();
    });
  });
});
