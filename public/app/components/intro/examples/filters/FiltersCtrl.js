(function (angular) {
    angular
        .module('app.intro')
        .controller('FiltersCtrl', FiltersCtrl);

    FiltersCtrl.$inject = ['$scope', 'PeopleService'];

    function FiltersCtrl($scope, PeopleService) {

        $scope.houses = ['Lannister', 'Starks', 'Targaryaen', 'Tyrell', 'Baratheon', 'Greyjoy', 'Tully', 'Arryn'];
        $scope.presupuesto = 0;
        $scope.people = PeopleService.getPeople();

        /** Binded Events to $scope **/
        $scope.checkBono = checkBono;


        function checkBono() {
            return (!isNaN($scope.presupuesto));
        }

    }


    angular
        .module('app.intro')
        .filter('Gender', Gender);

    function Gender() {
        /*
         * Gender
         * argument @input source array[]
         * argument @symbol expression can be string, obj, function
         * argument @comp comparator fn(actual, expected)
         */
        return function (input, symbol, comp) {
            var people = []
            angular.forEach(input, function (obj, idx) {
                if (obj.gender === symbol) {
                    people.push(obj.name);
                }
            });
            return people;
        }
    }

})(angular);
