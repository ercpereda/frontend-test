'use strict';

erEventApp
    .directive('erEventCountdown',
    function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="countdown labels-top" data-role="countdown" data-background-color="bg-red" data-label-color="fg-white" data-stop="{{stop}}}"></div>',
            scope: {
                stop: '@'
            }
        }
    }
);
