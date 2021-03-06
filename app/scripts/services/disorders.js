'use strict';

/**
 * @ngdoc service
 * @name disOrderApp.Disorders
 * @description
 * # Disorders
 * Service in the disOrderApp.
 */
 // Get all of the post data
angular.module('disOrderApp')
  .factory('DisorderData', ['$resource',
    function($resource){
      return $resource('http://disorder.dev/wp/wp-json/posts', {}, {
        query: {method:'GET', params:{}, isArray:true}
      });
    }]);
 // Get all of the tags
angular.module('disOrderApp')
  .factory('DisorderDataTaxonomies', ['$resource',
    function($resource){
      return $resource('http://disorder.dev/wp/wp-json/taxonomies/post_tag/terms', {}, {
        query: {method:'GET', params:{}, isArray:true}
      });
    }]);
  
angular.module('disOrderApp')
  .service('disordersFact', ['DisorderData', 'DisorderDataTaxonomies', function disordersFact(DisorderData , DisorderDataTaxonomies) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Disorders = {};

    // Set the data to a scope variable
    Disorders.list = DisorderData.query();
    // console.log("Data: " + JSON.stringify(Disorders.list));

    //Create the array of all tags
    Disorders.uniqueTags = DisorderDataTaxonomies.query();

    // Return the Disorders object
    return Disorders;
  }]);