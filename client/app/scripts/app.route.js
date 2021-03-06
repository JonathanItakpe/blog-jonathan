
'use strict';

var config = function ($routeProvider) {
		    $routeProvider
		      .when('/', {
		        templateUrl: 'views/main.html',
		        controller: 'MainCtrl',
		        controllerAs: 'main'
		      })
		      .when('/about', {
		        templateUrl: 'views/about.html',
		        controller: 'AboutCtrl',
		        controllerAs: 'about'
		      })
		      .otherwise({
		        redirectTo: '/'
		      });
		  };

config.$inject = ['$routeProvider'];

angular.module('blogApp').config(config);