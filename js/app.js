'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'myApp.controllers'
]).
directive('myPostRepeatDirective', function() {
    return function(scope, element, attrs) {
      if (scope.$last) {
        scope.$eval('doComplete()');
      }
    };
}).
config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|javascript|mailto|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
  $routeProvider.when('/projects/:projectId', {templateUrl: 'partials/project.html', controller: 'ProjectCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
