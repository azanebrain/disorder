'use strict';

/**
 * @ngdoc service
 * @name disOrderApp.Disorders
 * @description
 * # Disorders
 * Service in the disOrderApp.
 */
angular.module('disOrderApp')
  .service('disordersFact', function disordersFact() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Disorders = {};
    Disorders.list = [
      {
        name: 'Graph'
        , description: 'A graph is a graph'
      }, {
        name: 'Histogram'
        , description: 'A histogram graph is a graph'
      }
      , {
        name: 'Line'
        , description: 'A line is a line'
      }
      , {
        name: 'Scatter Plot'
        , description: 'A scatter plot is a scatter'
      }
    ];

    return Disorders;
  });
