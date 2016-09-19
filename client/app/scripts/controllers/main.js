
'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
var MainCtrl = function ($scope,$http,__env) {
		var main = this;
		$http.get(__env.apiUrl + '/posts')
		.then(function(response)
			{ 
				main.posts = response.data;
			});
		};

MainCtrl.$inject = ['$scope', '$http', '__env'];
angular.module('blogApp').controller('MainCtrl', MainCtrl);

