angular.module('erEventApp', ['ui.utils','ngRoute','ngAnimate'])
    .config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

    })
    .run(function($rootScope) {

    });
