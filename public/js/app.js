'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/list/:id', {
        templateUrl: 'partials/list',
        controller: 'ListCtrl'
    }).
    when('/templates', {
        templateUrl: 'partials/templates',
        controller: 'TemplatesCtrl'
    }).
    when('/template/:id', {
        templateUrl: 'partials/template',
        controller: 'TemplateCtrl'
    }).
    when('/addList', {
       templateUrl: 'partials/addList',
       controller: 'AddListCtrl' 
    }).
    when('/addPost', {
      templateUrl: 'partials/addPost',
      controller: 'AddPostCtrl'
    }).
    when('/readPost/:id', {
      templateUrl: 'partials/readPost',
      controller: 'ReadPostCtrl'
    }).
    when('/editPost/:id', {
      templateUrl: 'partials/editPost',
      controller: 'EditPostCtrl'
    }).
    when('/deletePost/:id', {
      templateUrl: 'partials/deletePost',
      controller: 'DeletePostCtrl'
    }).
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}]);