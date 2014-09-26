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

    //Create a new array of the unique tags
    var tagarray = [];

    angular.forEach($scope.disorders.list, function(value, tags){
      // Loop through each entry, adding the tags to an array

      // var tagarray = value.tag; //debug: Show the full tag
      // console.dir(tagarray); //debug: show what values are being added
      
      //combine the sub array into the big array
      //Which method is faster?:
      // $scope.distags = $scope.distags.concat(value.tag);

      //This method could fail for arrays over 100k members. See: http://stackoverflow.com/questions/1374126/how-to-extend-an-array-with-an-existing-javascript-array/17368101#17368101
      tagarray.push.apply(tagarray, value.tags);

    });
    // This function returns only the unique values in an array
    var arrayUnique = function(a) {
        return a.reduce(function(p, c) {
            if (p.indexOf(c) < 0) p.push(c);
            return p;
        }, []);
    };
    // Only take the unique tags
    tagarray = arrayUnique(tagarray);
    //Set it to a scope variable
    $scope.distags = arrayUnique(tagarray);

  });

// #############
// EXPERIMENTAL: 
// #############


angular.module('disOrderApp')
  .controller('DisorderTaggingCtrl', function ($scope, disordersFact) {
 // $scope.colors = {Blue, Orange};

$scope.colors = ['apple', 'orange', 'pear', 'naartjie'];

  // selected fruits
  $scope.selection = ['apple', 'pear'];

  // toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(fruitName) {
    var idx = $scope.selection.indexOf(fruitName);

    // is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // is newly selected
    else {
      $scope.selection.push(fruitName);
    }
  };


$scope.wines = [
        { name: "Wine A", tags: "sci-fi" },
        { name: "Wine B", tags: ["code", "angular"] },
        { name: "wine C", tags: "code" },
        { name: "Wine D", tags: "node" },
        { name: "Wine E", tags: "code" },
        { name: "wine F", tags: "sci-fi" },
        { name: "wine G", tags: "code"},
        { name: "wine H", tags: "code" }    
    ];
    $scope.filter = {};

    $scope.getCategories = function () {
        return ($scope.wines || []).map(function (w) {
            return w.tags;
        }).filter(function (w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    
    $scope.filterByCategory = function (wine) {
        return $scope.filter[wine.tags] || noFilter($scope.filter);
    };

    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    } 


    // Now set it to a scope 

    // console.debug('distags length: '+$scope.distags.length);
    // console.dir($scope.distags);
    // console.dir(tagarray); //debug: the final list of tags
    // angular.forEach($scope.distags, function(){
    //   console.debug("distag");
    // });
  });