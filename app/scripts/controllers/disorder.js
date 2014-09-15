'use strict';

/**
 * @ngdoc function
 * @name disOrderApp.controller:DisorderctrlCtrl
 * @description
 * # DisorderctrlCtrl
 * Controller of the disOrderApp
 */
angular.module('disOrderApp')
  .controller('DisorderCtrl', function ($scope, disordersFact) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.disorders = disordersFact;
  });
