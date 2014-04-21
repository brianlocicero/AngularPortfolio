'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('HomeCtrl', function($scope, $http, $location, $rootScope) {

		$http.get('data/projects.json').success(function(data) {
	    $scope.projects = data;
	  });

	  $scope.showProject = function (projectId) {
	  	$location.path('/projects/' + projectId);
	  }

    $rootScope.homePage = true;
    $rootScope.aboutPage = false;
    $rootScope.contactPage = false;

  })
  .controller('ProjectCtrl', function($scope, $routeParams, $http, $rootScope) {

  	$http.get('data/' + $routeParams.projectId + '.json').success( function(data) {
  		$scope.project = data[0];
  	});

    $rootScope.homePage = false;
    $rootScope.aboutPage = false;
    $rootScope.contactPage = false;

  })
  .controller('AboutCtrl', function($rootScope) {

    $rootScope.homePage = false;
    $rootScope.aboutPage = true;
    $rootScope.contactPage = false;

  })
  .controller('ContactCtrl', function($rootScope) {

    $rootScope.homePage = false;
    $rootScope.aboutPage = false;
    $rootScope.contactPage = true;

  });
