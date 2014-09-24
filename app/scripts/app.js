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
      .when('/tag', {
        templateUrl: 'views/tag.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
