(function (angular) {
    angular
        .module('app', ['ui.router', 'app.intro', 'app.forms', 'app.directives'])
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'app/components/welcome/welcome.tpl.html',
                controller: 'WelcomeCtrl'
            })
            .state('intro', {
                abstract: true,
                url: '/intro',
                templateUrl: 'app/components/intro/intro.tpl.html',
                controller: 'IntroCtrl'
            })
             /********************************
              * Intro Slideshow Nested States
              *******************************/
            .state('intro.part1', {
                url: '/part1',
                templateUrl: 'app/components/intro/slides/part1.tpl.html'
            })
            .state('intro.part2', {
                url: '/part2',
                templateUrl: 'app/components/intro/slides/part2.tpl.html'
            })
            .state('intro.part3', {
                url: '/part3',
                templateUrl: 'app/components/intro/slides/part3.tpl.html'
            })
            .state('intro.databinding', {
                url: '/databinding',
                templateUrl: 'app/components/intro/examples/databinding/databinding.tpl.html',
                controller: 'DataBindingCtrl'
            })
            .state('intro.repeat', {
                url: '/repeat',
                templateUrl: 'app/components/intro/examples/repeat/repeat.tpl.html',
                controller: 'RepeatCtrl'
            })
            .state('intro.filters', {
                url: '/filters',
                templateUrl: 'app/components/intro/examples/filters/filters.tpl.html',
                controller: 'FiltersCtrl'
            })
            .state('intro.hide', {
                url: '/hide',
                templateUrl: 'app/components/intro/examples/hide/hide.tpl.html',
                controller: 'HideCtrl'
            })
            .state('intro.forms', {
                url: '/forms',
                templateUrl: 'app/components/forms/forms.tpl.html',
                controller: 'FormsCtrl'
            })
            /********************************
             * End of Intro Nested States
             *******************************/

            .state('directives', {
                abstract: true,
                url: '/directives',
                templateUrl: 'app/components/directives/directives.tpl.html'
            })
            .state('directives.syntax', {
                url: '/syntax',
                templateUrl: 'app/components/directives/syntax.tpl.html',
            })
            .state('directives.isolate_scope', {
                url: '/isolate_scope',
                templateUrl: 'app/components/directives/isolate_scope.tpl.html',
            })
            .state('directives.clock', {
                url: '/clock',
                templateUrl: 'app/components/directives/clock.tpl.html',
            });

        /** Default Landing Page **/
        $urlRouterProvider.otherwise('/welcome');

    }
})(angular);
