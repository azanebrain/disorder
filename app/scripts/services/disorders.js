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
      return $resource('http://disorder.dev/wp/wp-json/posts', {}, {
        query: {method:'GET', params:{}, isArray:true}
      });
    }]);

angular.module('disOrderApp')
  .service('disordersFact', ['DisorderData', function disordersFact(DisorderData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Disorders = {};

    Disorders.list = DisorderData.query();
console.log("TEST");
    console.debug(Disorders.list);
console.log("Data: " + JSON.stringify(Disorders.list));
    return Disorders;
  }]);
