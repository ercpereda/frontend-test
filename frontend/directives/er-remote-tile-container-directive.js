'use strict';

erEventApp
    .directive('erRemoteTileContainer',
        function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: '/templates/directives/er-remote-tile-container.html',
                transclude: true,
                scope: {
                },
                controller: 'erRemoteTileContainerController'
            }
        }
);
