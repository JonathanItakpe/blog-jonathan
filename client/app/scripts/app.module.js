'use strict';

var env = {};

// Import variables if present (from app.env.js)
if(window){  
  Object.assign(env, window.__env);
}

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */
angular
  .module('blogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

// Register environment in AngularJS as constant
angular.module('blogApp').constant('__env', env);
