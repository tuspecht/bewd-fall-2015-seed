(function() {
  angular.module('bewd.seed', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.otherwise('/someSpecialRoute');
    });
})();
