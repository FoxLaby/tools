var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider,$interpolateProvider) {
    $interpolateProvider.startSymbol('{{').endSymbol('}}');
    $routeProvider.
    when('/', {
            templateUrl : 'views/index.html',
             controller  : 'index'
    }).
    otherwise({
            redirectTo: '/'
    });
});