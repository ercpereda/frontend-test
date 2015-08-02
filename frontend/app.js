var erEventApp = angular.module('erEventApp', ['ui.utils','ngRoute','ngAnimate', 'ngResource', 'djds4rce.angular-socialshare'])
    .config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/events', {
       templateUrl: '/templates/er-event-list.html'
    });
    $routeProvider.when('/event/new', {
      templateUrl: '/templates/er-new-event.html',
      controller: 'erNewEventController'
    });
    $routeProvider.when('/event/:id', {
      templateUrl: '/templates/er-event-details.html',
      controller: 'erEventDetailsController'
    });

    $routeProvider.otherwise({redirectTo:'/events'});

    $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(function($rootScope) {
        $rootScope.backgroundColor = localStorage.backgroundColor || 'dark';

        $rootScope.showBackMenuOption = false;
        $rootScope.setShowBackMenuOption = function (show) {
            $rootScope.showBackMenuOption = show;
        };

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
