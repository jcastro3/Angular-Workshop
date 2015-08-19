(function (angular) {
    angular
        .module('app.directives')
        .directive('myCustomer', function() {
          return {
            restrict: 'E',
            templateUrl: 'app/common/directives/isolate_scope/my-customer.html'
          };
        });
})(angular);


// scope: {
// customerInfo: '=info'
// },
