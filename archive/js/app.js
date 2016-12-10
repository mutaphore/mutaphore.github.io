var homeApp = angular.module("homeApp", [
  'ngRoute',
  'homeAppControllers'
]);

homeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'NavigationController'
      }).
      when('/projects', {
        templateUrl: 'templates/projects.html',
      }).
      when('/about', {
        templateUrl: 'templates/about.html',
      }).
      when('/contact', {
        templateUrl: 'templates/contact.html',
      }).
      when('/terminal', {
        templateUrl: 'templates/terminal.html',
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);