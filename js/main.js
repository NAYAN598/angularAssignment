(function(){
var app = angular.module('myApp', ["ngRoute"]);

app.controller('validateCtrl', function($scope) {
    $scope.user = 'nayan kankadiya';
    $scope.email = 'patel.nayan598@gmail.com';
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/myNote", {
        templateUrl : "angularTest/html/myNote.htm"
    });
    });
});