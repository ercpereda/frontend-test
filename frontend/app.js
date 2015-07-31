var erEventApp = angular.module('erEventApp', ['ui.utils','ngRoute','ngAnimate', 'ngResource'])
    .config(function($routeProvider) {

    $routeProvider.when('/events', {
       templateUrl: '/templates/er-event-list.html'
    });
    $routeProvider.when('/events/:id', {
      templateUrl: '/templates/er-event-details.html'
    });
    $routeProvider.otherwise({redirectTo:'/events'});

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
