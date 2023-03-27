app.controller("controller.home", ["$scope", "$rootScope", "$task.service", function ($scope, $rootScope, $task) {

    const date = new Date();

    $scope.columns = [];
    $scope.data = {
        date: {
            day: date.getDate(),
            month: date.toLocaleString('en-us', { month: 'long' }),
            year: date.getFullYear(),
            status: "bg-filter-default"
        },
        label: {},
    }

    $scope.option = function () {

        if ($scope.data.id !== undefined) {

            $scope.put.task();
        } else {

            $scope.set.task();
        }
    }

    $scope.set = {

        task: function () {
            $task.set.task($scope.column, $scope.data);
        },

        column: function () {
            $scope.columns = $task.set.column();
        },

        status: function (name) {
            $scope.data.label = $task.set.status(name);
        }
    }

    $scope.get = {

        task: function (getTask) {

            if (getTask !== undefined) {
                $scope.data = angular.copy(getTask);
            } else {
                $scope.set.status(getTask);
            }
        },

        column: function (getColumn) {
            $scope.column = angular.copy(getColumn);
        }
    }

    $scope.put = {

        task: function () {
            $scope.columns[$scope.column.id].tasks[$scope.data.id] = $task.put.task($scope.column, $scope.data);
        },
    }


    $scope.delete = {

        task: function () {
            $scope.columns[$scope.column.id].tasks = $task.delete.task($scope.column, $scope.data);
        },
    }
}])