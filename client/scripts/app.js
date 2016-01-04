var app = angular.module('app',['ui.router','ngResource','toaster']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: 'partials/view.html',
            controller:'viewController',
            controllerAs:'view'
        })
});

