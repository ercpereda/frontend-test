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
