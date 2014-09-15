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
        name: 'Read Dune'
        , description: 'Gonna get some spices'
        , tag : [
          'sci fi',
          'relaxation'
        ]
      }, {
        name: 'Watch Blade Runner'
        , description: 'Androids dreaming of electric sheep'
        , tag : [
          'sci fi',
          'relaxation'
        ]
      }
      , {
        name: 'Do more with Angular'
        , description: '...'
        , tag : [
          'code',
          'angular'
        ]
      }
      , {
        name: 'Yeoman Angular generator'
        , description: 'Dev tool'
        , link: 'https://github.com/yeoman/generator-angular'
        , tag : [
          'code',
          'angular',
          'yeoman'
        ]
      }
      , {
        name: 'Bower'
        , description: 'Dev tool'
        , link: 'http://bower.io'
        , tag : [
          'code',
          'bower'
        ]
      }
      , {
        name: 'NPM'
        , description: 'Dev tool'
        , link: 'https://www.npmjs.org/'
        , tag : [
          'code',
          'node'
        ]
      }
      , {
        name: 'Angular Foundation'
        , description: 'Dev tool'
        , link: 'https://github.com/pineconellc/angular-foundation'
        , tag : [
          'code',
          'angular',
          'foundation'
        ]
      }
    ];

    return Disorders;
  });
