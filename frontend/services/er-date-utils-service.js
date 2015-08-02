'use strict';

erEventApp.factory('erDateUtilsService',
    function(){
        return {
            getEventNextDate: function(dates) {
                var result = [];
                for(var i = 0; i < dates.length; i++) {
                    result.push(moment(dates[i]));
                }

                result.sort(
                    function(a, b) {
                        if (a.isAfter(b)) return 1;
                        if (a.isSame(b)) return 0;
                        if (a.isBefore(b)) return -1;
                    }
                );
                var now = moment();
                for(var i = 0; i < result.length; i++) {
                    if (result[i].isAfter(now) || result[i].isSame(now)) {
                        return result[i];
                    }
                }
            }
        };
    }
);
