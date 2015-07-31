'use strict';

erEventApp.factory('erEventService',
    function($resource, $q) {
        var events = $resource('http://localhost:3000/events');

        return {
            getAll: function() {
                var deferred = $q.defer();

                events.get(
                    function (events) {
                        deferred.resolve(events);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );

                return deferred.promise;
            }
        };
    }
);
