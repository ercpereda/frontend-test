'use strict';

erEventApp.factory('erEventService',
  function($resource, $q, $timeout, erDateUtilsService) {
    var events = $resource('http://localhost:3000/events/:id');
    var highlighteds = $resource('http://localhost:3000/events/featured')

    return {
      getAll: function() {
        var deferred = $q.defer();

        $timeout(function() {
          events.get(
            function (events) {

              for(var i = 0; i < events.events.length; i++) {
                events.events[i].date = erDateUtilsService.getEventNextDate(events.events[i].dates);
              }

              deferred.resolve(events);
            },
            function (response) {
              deferred.reject(response);
            }
          );
        }, 5000);

        return deferred.promise;
      },
      getHighlighted: function () {
        var deferred = $q.defer();
        $timeout(function() {
            highlighteds.get(
                function (events) {
                    for(var i = 0; i < events.events.length; i++) {
                        events.events[i].date = erDateUtilsService.getEventNextDate(events.events[i].dates);
                    }
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
