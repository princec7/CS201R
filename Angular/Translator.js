var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Clean House', done:false}];

    $scope.todoAdd = function() {
    $scope.translatorOutput.push({result:$scope.toTranslate});
    $scope.todoPerson = "";
    };
});