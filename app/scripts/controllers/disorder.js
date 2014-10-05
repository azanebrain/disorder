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
    //Set a scope object of our data
    $scope.disorders = disordersFact;
  });
