'use strict';

erEventApp
    .filter('erGetDate', function() {
        return function (input) {
            return input.format('MM/DD/YYYY');
        }
    })
    .filter('erGetTime', function() {
        return function(input) {
            return input.format('HH:mm');
        }
    })
    .filter('erPassDate', function() {
        return function(input) {
            return input
        }
    });
