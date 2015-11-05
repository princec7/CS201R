var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoPerson});
        $scope.todoInput = "";
    };
});