(function (angular) {
    angular
        .module('app.directives')
        .directive('myCustomer', function() {
          return {
            restrict: 'E',
            templateUrl: 'app/common/directives/clock/clock.html',
            link: function (scope, element, attr, ctrl ) {

                function startTime() {
                    var today=new Date();

                    scope.hour = today.getHours();
                    scope.min = today.getMinutes();
                    scope.sec = today.getSeconds();
                    scope.min = checkTime(m);
                    scope.sec = checkTime(s);
                    var t = setTimeout(function(){startTime()},500);
                }

                function checkTime(i) {
                    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
                    return i;
                }

            }
          };
        });
})(angular);


// scope: {
// customerInfo: '=info'
// },
