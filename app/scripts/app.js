'use strict';

/**
 * @ngdoc overview
 * @name disOrderApp
 * @description
 * # disOrderApp
 *
 * Main module of the application.
 */
angular
  .module('disOrderApp', [
    'angular.filter',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/views/about.html'
      });
  });
