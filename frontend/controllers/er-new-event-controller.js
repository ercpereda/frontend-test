'use strict';

erEventApp.controller('erNewEventController',
    function($scope, erEventService) {
        $scope.addDateTime = function (date, time) {
            if (!$scope.event.dates)
                $scope.event.dates = [];
            $scope.event.dates.push(date + ' ' + time);
            console.log($scope.event);
        };

        $scope.save = function (event) {
            erEventService.addEvent(event);
        };
    }
);
