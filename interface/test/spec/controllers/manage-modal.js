'use strict';

describe('Controller: ManageModalCtrl', function () {

  // load the controller's module
  beforeEach(module('labcloud'));

  var ManageModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageModalCtrl = $controller('ManageModalCtrl', {
      $scope: scope
    });
  }));

});
