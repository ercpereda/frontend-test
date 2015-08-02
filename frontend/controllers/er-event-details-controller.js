'use strict';

erEventApp.controller('erEventDetailsController',
    function($scope, $routeParams, erEventService, erDateUtilsService) {
        $scope.setShowBackMenuOption(true);
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

                        $scope.date = erDateUtilsService.getEventNextDate($scope.event.dates);

                        //var duration = moment.duration($scope.date.diff($scope.now));

                        $scope.stop = $scope.date ? $scope.date.format('MM/DD/YYYY HH:mm') : $scope.now.format('MM/DD/YYYY HH:mm');
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
