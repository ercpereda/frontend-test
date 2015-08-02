'use strict';

erEventApp.controller('erNewEventController',
    function($scope, erEventService) {
        $scope.setShowBackMenuOption(true);
        $scope.event = {};
        $scope.addDateTime = function (date, time) {
            if (!$scope.event.dates)
                $scope.event.dates = [];
            if (!$scope.dates)
                $scope.dates = [];
            if(!moment(date + ' ' + time).isValid) {
                time = '00:00';
            }
            $scope.dates.push({date: date, time: time, selected: false});
            $scope.event.dates.push(date + ' ' + time);
        };

        $scope.deleteDateTime = function() {
            if($scope.selected !== undefined) {
                $scope.dates = $scope.dates.slice(0, $scope.selected).concat($scope.dates.slice($scope.selected + 1, $scope.dates.length));
                $scope.event.dates = $scope.event.dates.slice(0, $scope.selected).concat($scope.event.dates.slice($scope.selected + 1, $scope.event.dates.length));
                $scope.selected = undefined;
            }
        };

        $scope.selectRow = function(index) {
            if($scope.selected !== undefined) {
                $scope.dates[$scope.selected].selected = false;
                if ($scope.selected === index) {
                    $scope.selected = undefined;
                    return;
                }
            }
            $scope.selected = index;
            $scope.dates[index].selected = true;
        };

        $scope.save = function () {
            if(!$scope.event.dates) {
                $scope.showDatesRequire = true;
                return;
            }
            $scope.showDatesRequire = false;
            if ($scope.eventForm.$valid) {
                erEventService.addEvent($scope.event)
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
