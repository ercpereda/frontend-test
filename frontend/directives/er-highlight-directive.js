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
        },
        controller: function($scope, $location, erDateUtilsService) {
            $scope.details = function (id) {
                $location.url('/event/' + id);
            };
            $scope.date = erDateUtilsService.getEventNextDate($scope.event.dates);
        }
      }
    }
);
