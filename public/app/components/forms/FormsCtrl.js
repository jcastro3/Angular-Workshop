(function (angular) {
    angular
        .module('app.forms', [])
        .controller('FormsCtrl', FormsCtrl);

    FormsCtrl.$inject = ['$scope'];

    function FormsCtrl($scope) {
        $scope.sendRequest = sendRequest;

        function sendRequest() {
            alert("Request sent");
        }
    }

})(angular);
