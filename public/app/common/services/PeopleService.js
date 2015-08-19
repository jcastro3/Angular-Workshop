(function (angular) {
    angular
        .module('app.intro')
        .service('PeopleService', PeopleService);

    PeopleService.$inject = [];

    function PeopleService() {

        return {
            getPeople: getPeople
        }

        function getPeople() {
            return [
                      {
                        "name": "Peck Howell",
                        "gender": "male"
                      },
                      {
                        "name": "Heidi Carver",
                        "gender": "female"
                      },
                      {
                        "name": "Eula Rogers",
                        "gender": "female"
                      },
                      {
                        "name": "Murphy Weiss",
                        "gender": "male"
                      },
                      {
                        "name": "Cherry Chavez",
                        "gender": "female"
                      },
                      {
                        "name": "Dudley Merrill",
                        "gender": "male"
                      },
                      {
                        "name": "Sharon Guthrie",
                        "gender": "female"
                      },
                      {
                        "name": "Hill Dyer",
                        "gender": "male"
                      }
                ];
        }
    }

})(angular);
