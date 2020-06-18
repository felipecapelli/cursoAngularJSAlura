angular.module('alurapic', ['minhasDiretivas', 'ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);//pra funcinar o html principal tem que ter a tag <base href="">

    $routeProvider.when('/fotos',{
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});
})