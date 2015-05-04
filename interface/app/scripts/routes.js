'use strict'

var app = angular.module('labcloud')
  .config(['$stateProvider','$urlRouterProvider','$locationProvider',
    function($stateProvider,$urlRouterProvider,$locationProvider){

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
    $urlRouterProvider
          .otherwise('/login');
    $stateProvider
        .state('login', {
          url: "/login",
          templateUrl: "views/login.html",
          controller: 'LoginController',
          resolve: {
            deps: ['$ocLazyLoad',
              function($ocLazyLoad){
                return $ocLazyLoad.load('oitozero.ngSweetAlert');
            }]
          }
        })
        .state('labmanage',{
          url: '/labmanage',
          templateUrl: "views/lab-manage.html",
          controller: 'LabManageCtrl'
        })
        .state('applymanage',{
          url: '/applymanage',
          templateUrl: "views/apply-manage.html",
          controller: 'ApplyManageCtrl'
        })
        .state('semestermanage',{
          url: '/semestermanage',
          templateUrl: "views/semester-manage.html",
          controller: 'SemesterManageCtrl'
        })
        .state('usermanage',{
          url: '/usermanage',
          templateUrl: "views/user-manage.html",
          controller: 'UserManageCtrl'
        })
        .state('coursemanage',{
          url: '/coursemanage',
          templateUrl: "views/course-manage.html",
          controller: 'CourseManageCtrl'
        });
  }]);




