'use strict';

erEventApp.controller('erEventHighlightedListController',
  function($scope, erEventService) {
    $scope.showLoading = true;

    erEventService.getHighlighted()
      .then(
        function(responce) {
          $scope.elements = responce.events;
          $scope.showLoading = false;
          if (responce.events) {
            $scope.showElements = true;
          }
          else {
            $scope.showNoElements = true;
          }
        },
        function(responce) {
          $scope.showLoading = false;
          $scope.showError = true;
          console.log(responce);
        }
      );
  }
);