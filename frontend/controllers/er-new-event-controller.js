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
            if ($scope.eventForm.$valid) {
                erEventService.addEvent(event)
                    .then(
                        function () {
                            $scope.showSuccess = true;
                            $scope.showError = false;
                        },
                        function () {
                            $scope.showSuccess = false;
                            $scope.showError = true;
                        }
                    );
            }
        };
    }
);
