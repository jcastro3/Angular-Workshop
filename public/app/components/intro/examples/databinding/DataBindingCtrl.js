(function (angular) {
    angular
        .module('app.intro', [])
        .controller('DataBindingCtrl', DataBindingCtrl);

    DataBindingCtrl.$inject = ['$scope'];

    function DataBindingCtrl($scope) {
        $scope.name = 'John Snow';
    }

})(angular);
