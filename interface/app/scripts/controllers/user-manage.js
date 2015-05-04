'use strict';

/**
 * @ngdoc function
 * @name labcloud.controller:UserManageCtrl
 * @description
 * # UserManageCtrl
 * Controller of the labcloud
 */
angular.module('labcloud')
  .controller('UserManageCtrl', function ($scope, modalService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addUser = function(role){
      if(roel=='teacher'){
        var dialog = modalService.mdDialog('/templates/m-teacher-creation-dialog.html','EmptyModalCtrl',{});  
      }else if(role=='student'){
        var dialog = modalService.mdDialog('/templates/m-teacher-creation-dialog.html','EmptyModalCtrl',{});  
      }else if(role=='admin'){
        var dialog = modalService.mdDialog('/templates/m-teacher-creation-dialog.html','EmptyModalCtrl',{});  
      }
    };

  });
