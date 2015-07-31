'use strict';

erEventApp.controller('erEventListController',
  function($scope, erEventService) {

    erEventService.getAll()
      .then(
        function(responce) {
          $scope.events = responce.events;
          //console.log(responce.events);
        },
        function(responce) {console.log(responce);}
      );
  }
);
