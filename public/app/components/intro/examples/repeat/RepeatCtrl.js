(function (angular) {
    angular
        .module('app.intro')
        .controller('RepeatCtrl', RepeatCtrl);

    RepeatCtrl.$inject = ['$scope', 'PeopleService'];

    function RepeatCtrl($scope, PeopleService) {

        /** Array of Objects **/
        $scope.people = PeopleService.getPeople();

        /** String Array **/
        $scope.hodor = ['hodor', 'hodor hodor', 'hodor', 'hodor hodor hodor hodor', 'hodor hodor', 'hodor hodor hodor'];
        

    }

})(angular);
