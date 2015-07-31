var erEventApp = angular.module('erEventApp', ['ui.utils','ngRoute','ngAnimate', 'ngResource'])
    .config(function($routeProvider) {

    $routeProvider.when('/home', {
       templateUrl: '/templates/er-event-list.html',
       controller: 'erEventListController'
    });
    $routeProvider.otherwise({redirectTo:'/home'});

    })
    .run(function($rootScope) {
        $rootScope.backgroundColor = localStorage.backgroundColor || 'dark';

        var _tempBackgroundColor = 'dark';
        $rootScope.previewBackgroundColor = function (color) {
            _tempBackgroundColor = $rootScope.backgroundColor;
            $rootScope.backgroundColor = color;
        };

        $rootScope.resetBackgroundColor = function () {
            $rootScope.backgroundColor = _tempBackgroundColor;
        };

        $rootScope.changeBackgroundColor = function (color) {
            $rootScope.backgroundColor = color;
            _tempBackgroundColor = color;
            localStorage.backgroundColor = color;
        };
    });
