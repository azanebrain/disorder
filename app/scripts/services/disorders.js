'use strict';

/**
 * @ngdoc service
 * @name disOrderApp.Disorders
 * @description
 * # Disorders
 * Service in the disOrderApp.
 */
angular.module('disOrderApp')
  .factory('DisorderData', ['$resource',
    function($resource){
      return $resource('data/data.json', {}, {
        query: {method:'GET', params:{phoneId:'data'}, isArray:true}
      });
    }]);

angular.module('disOrderApp')
  .service('disordersFact', ['DisorderData', function disordersFact(DisorderData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Disorders = {};

    Disorders.list = DisorderData.query();

    return Disorders;
  }]);
