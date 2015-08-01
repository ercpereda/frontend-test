'use strict';

erEventApp.controller('erEventDetailsController',
    function($scope, $routeParams, erEventService) {
        $scope.showLoading = true;
        erEventService.getById($routeParams.id)
            .then(
                function(responce) {
                    $scope.showLoading = false;
                    $scope.showError = false;
                    $scope.showNoExists = false;

                    if (responce.event) {
                        $scope.showEvent = true;
                        $scope.event = responce.event;

                        var dates = [];
                        for(var i = 0; i < responce.event.dates.length; i++) {
                            dates.push(moment(responce.event.dates[i]));
                        }
                        $scope.event.dates = dates;

                        $scope.now = moment();

                        $scope.stop = moment(new Date(2015, 9, 18)).format();
                    }
                },
                function(responce) {
                    $scope.showLoading = false;
                    $scope.showEvent = false;
                    $scope.showNoExists = false;
                    if (responce.status === 404) {
                        $scope.showNoExists = true;
                    }
                    else {
                        $scope.showError = true;
                    }

                }
            );
    }
);
