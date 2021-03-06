'use strict';

erEventApp.controller('erEventHighlightedListController',
  function($scope, erEventService, $filter) {
    $scope.showLoading = true;

    erEventService.getHighlighted()
      .then(
        function(responce) {
          $scope.elements = responce.events;
          $scope.ordered = $filter('orderBy')($scope.elements, function(e){return e.date ? e.date.format('YYYY-MM-DD-HH-mm') : '9';});
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
