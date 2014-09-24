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
        name: 'Dune'
        , description: 'Gonna get some spices'
        , tags : [
          'sci-fi',
          'literature'
        ]
      }, {
        name: 'Blade Runner'
        , description: 'Androids dreaming of electric sheep'
        , tags : [
          'sci-fi',
          'film'
        ]
      }
      , {
        name: 'Do more with Angular'
        , description: '...'
        , tags : [
          'code',
          'angular'
        ]
      }
      , {
        name: 'Yeoman Angular generator'
        , description: 'Dev tool'
        , link: 'https://github.com/yeoman/generator-angular'
        , tags : [
          'code',
          'angular',
          'yeoman'
        ]
      }
      , {
        name: 'Bower'
        , description: 'Dev tool'
        , link: 'http://bower.io'
        , tags : [
          'code',
          'bower'
        ]
      }
      , {
        name: 'NPM'
        , description: 'Dev tool'
        , link: 'https://www.npmjs.org/'
        , tags : [
          'code',
          'node'
        ]
      }
      , {
        name: 'Angular Foundation'
        , description: 'Dev tool'
        , link: 'https://github.com/pineconellc/angular-foundation'
        , tags : [
          'code',
          'angular',
          'foundation'
        ]
      }
    ];

    return Disorders;
  });
