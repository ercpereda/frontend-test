'use strict';

erEventApp
  .directive('erHighlight',
    function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/er-highlight.html',
        scope: {
          event: '='
        }
      }
    }
);
