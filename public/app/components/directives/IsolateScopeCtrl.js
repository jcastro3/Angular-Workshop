(function (angular) {
    angular
        .module('app.directives', [])
        .controller('FirstCtrl', FirstCtrl);

    FirstCtrl.$inject = ['$scope'];

    function FirstCtrl($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }

    angular
        .module('app.directives')
        .controller('SecondCtrl', SecondCtrl);

    SecondCtrl.$inject = ['$scope'];

    function SecondCtrl($scope) {
        $scope.customer = {
          name: 'Igor',
          address: '123 Somewhere'
        };
    }


})(angular);
