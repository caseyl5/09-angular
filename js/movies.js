'use strict';

//note that _MOVIES has been loaded as a global

/* Your code goes here */

var myApp = angular.module('MoviesApp', []);

myApp.controller('MoviesCtrl', ['$scope', function ($scope) {

    // make a model  
    $scope.myName = "Blade";

    $scope.message = "Hello world!";

    $scope.showDemo = true; 

    //assign another (complex) value to the model
    $scope.movies = [
        { title: 'Gone with the Wind', year: 1939 },
        { title: 'Casablanca', year: 1942 },
        { title: 'Star Wars', year: 1979 }
    ];

    $scope.sayHello = function() {
        console.log('and i was like...');
    };

}]);

