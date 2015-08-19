(function (angular) {
    angular
        .module('app.intro')
        .controller('HideCtrl', HideCtrl);

    HideCtrl.$inject = ['$scope'];

    function HideCtrl($scope) {
        $scope.shame = true;
        $scope.double_shame = false;
        $scope.shameYou = shameYou;
        $scope.shameYou2 = shameYou2;

        function shameYou(shamed) {
            $scope.shame = !shamed;
        }
        function shameYou2(shamed) {
            $scope.double_shame = !shamed;
        }

    }

})(angular);
