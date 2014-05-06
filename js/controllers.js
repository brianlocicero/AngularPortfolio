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

    $scope.liPos = 1;

    $scope.doComplete = function () {

      $("li").each(function(index) {

        switch ($scope.liPos) {
          case 1:
            $(this).addClass("left");
            break;
          case 2:
            $(this).addClass("middle");
            break;
          case 3:
            $(this).addClass("right");
            $scope.liPos = 0;
            break;
          default:
            break;
        }

        $scope.liPos++;

      });
    }

  })
  .controller('ProjectCtrl', function($scope, $routeParams, $http, $rootScope) {

  	$http.get('data/' + $routeParams.projectId + '.json').success( function(data) {
  		$scope.project = data[0];

      if ( $scope.project.portrait ) {
        $("div.gallery").addClass("portrait");
      }

  	});

    $rootScope.homePage = false;
    $rootScope.aboutPage = false;
    $rootScope.contactPage = false;

    $scope.doComplete = function () {
        $(".rslides").responsiveSlides({
          auto: false,
          pager: true
        });
    }

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
