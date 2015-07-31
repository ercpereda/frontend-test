'use strict';

erEventApp
  .directive('erEvent',
    function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/er-event.html',
        scope: {
          event: '='
        }
      }
    }
);