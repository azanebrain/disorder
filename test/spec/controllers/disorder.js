'use strict';

describe('Controller: DisorderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('disOrderApp'));

  var DisorderctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisorderctrlCtrl = $controller('DisorderctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of disorders to the scope', function () {
    expect(scope.disorders.length).toBe(4);
  });
});
