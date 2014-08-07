var app = angular.module('stratojetApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        }).
        when('/game', {
            templateUrl: 'templates/game.html',
            controller: 'gameController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

app.controller('homeController', function($scope) {

    $scope.message = 'This is home';
    $scope.pageClass = 'page-home';

});


app.controller('gameController', function($scope) {

    $scope.message = 'This is game';
    $scope.pageClass = 'page-game';

});