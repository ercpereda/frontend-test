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
