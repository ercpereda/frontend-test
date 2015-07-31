'use strict';

erEventApp
  .directive('erColorPalette',
    function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/er-color-palette.html',
        scope: {
          enter: '&',
          leave: '&',
          click: '&'
        },
        controller: function($scope) {
          $scope.colors = ['dark', 'darkBrown', 'darkCrimson', 'darkViolet', 'darkMagenta',
            'darkCyan', 'darkCobalt', 'darkTeal', 'darkEmerald', 'darkGreen',
            'darkOrange', 'darkRed', 'darkPink', 'darkIndigo', 'darkBlue',
            'lightBlue', 'lightTeal', 'lightOlive', 'lightOrange', 'lightPink'];
        }
      }
    }
);
