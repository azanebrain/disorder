'use strict';

describe('Service: Disorders', function () {

  // load the service's module
  beforeEach(module('disOrderApp'));

  // instantiate service
  var Disorders;
  beforeEach(inject(function (_Disorders_) {
    Disorders = _Disorders_;
  }));

  it('should do something', function () {
    expect(!!Disorders).toBe(true);
  });

});
