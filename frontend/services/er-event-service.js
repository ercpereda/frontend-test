'use strict';

erEventApp.factory('erEventService',
  function($resource, $q, $timeout) {
    var events = $resource('http://localhost:3000/events/:id');

    return {
      getAll: function() {
        var deferred = $q.defer();

        $timeout(function() {
          events.get(
            function (events) {
              deferred.resolve(events);
            },
            function (response) {
              deferred.reject(response);
            }
          );
        }, 5000);

        return deferred.promise;
      },
      getById: function(id) {
          var deferred = $q.defer();

          $timeout(function () {
              events.get({id: id},
                  function(event) {
                      deferred.resolve(event);
                  },
                  function(responce) {
                      deferred.reject(responce);
                  }
              );
          }, 5000);

          return deferred.promise;
      },
      addEvent: function(event) {
          var deferred = $q.defer();

          events.save({event: event},
            function (event) {
                deferred.resolve(event)
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
