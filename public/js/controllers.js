'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
    $http.get('/api/lists').
        success(function (data, status, headers, config) {
            $scope.lists = data.lists;
            $scope.templates = data.templates;
        });
}

function TemplatesCtrl($scope, $http) {
    //$http.get('/api/templates').
    //    success(function (data, status, headers, config) {
    //        $scope.templates = "something";
    //    });
    $scope.templates = [
        {
            "id": 1,
            "title": "Monday",
            "lastupdated": "11/19/2015 12:20 AM",
            "items": [
                {
                    "text": "Item 1"
                },
                {
                    "text": "Item 2"
                },
                {
                    "text": "Item 3"
                },
                {
                    "text": "Item 4"
                }
            ]
        }
    ];
}

function ListCtrl($scope, $http, $routeParams) {
    $http.get('/api/list/' + $routeParams.id).
        success(function (data) {
            $scope.list = data.list;
            $scope.templates = data.templates;
        }).
        error(function (data, status, headers, config) {
          $scope.list = 'Error!';
          $scope.templates = 'Error!';
        });
}

function AddListCtrl($scope, $http) {
    $scope.form = {};
    $scope.submitPost = function () {
        $http.post('/api/list', $scope.form).
            success(function (data) {
                $location.path('/');
            });
    };
}

//function TemplatesCtrl($scope, $http) {
//    $http.get('/api/templates').
//        success(function (data, status, headers, config) {
//            $scope.templates = data.templates;
//        });
//}

function TemplateCtrl($scope, $http, $routeParams) {
    $http.get('/api/template/' + $routeParams.id).
        success(function (data) {
            $scope.template = data.template;
        }).
        error(function (data, status, headers, config) {
            $scope.templates = 'Error!';
        });
}

function AddPostCtrl($scope, $http) {
    $scope.form = {};
    $scope.submitPost = function () {
        $http.post('/api/post', $scope.form).
            success(function (data) {
                $location.path('/');
            });
    };
}

function ReadPostCtrl($scope, $http, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).
        success(function (data) {
            $scope.post = data.post;
        });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/post/' + $routeParams.id).
        success(function (data) {
            $scope.form = data.post;
        });

    $scope.editPost = function () {
        $http.put('/api/post/' + $routeParams.id, $scope.form).
            success(function (data) {
                $location.url('/readPost/' + $routeParams.id);
            });
    };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).
        success(function(data) {
            $scope.post = data.post;
        });

    $scope.deletePost = function () {
        $http.delete('/api/post/' + $routeParams.id).
                success(function(data) {
                $location.url('/');
            });
    };

    $scope.home = function () {
        $location.url('/');
    };
}



//angular.module('myApp.controllers', []).
//  controller('AppCtrl', function ($scope, $http) {
//
//    $http({
//      method: 'GET',
//      url: '/api/name'
//    }).
//    success(function (data, status, headers, config) {
//      $scope.name = data.name;
//    }).
//    error(function (data, status, headers, config) {
//      $scope.name = 'Error!';
//    });
//
//  });
