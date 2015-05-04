'use strict';

/**
 * @ngdoc service
 * @name labcloud.modalService
 * @description
 * # modalService
 * Service in the labcloud.
 */
angular.module('labcloud')
  .service('modalService', function (dialogs) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.mdDialog = function(template, controller, data){
      var dialog = dialogs.create(template, controller, data, {
        size: 'md',
        keyboard: true,
        backdrop: true,
        windowClass: 'model-overlay'
      });
      return dialog;
    };


  });
