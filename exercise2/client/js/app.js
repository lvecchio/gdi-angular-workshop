// initialize the app
angular.module('TaskManager', []).run(function(TaskFactory) {
    TaskFactory.fetch();
});

angular.module('TaskManager').constant('ServerUrl', 'http://localhost:3000/');

angular.module('TaskManager').factory('TaskFactory', function($http, ServerUrl) {
    var tasks = [];
    
    var fetch = function() {
        $http.get(ServerUrl + 'tasks').success(function(response) {
            // use angular.copy() to retain the original array which the controllers are bound to
            // tasks = response will overwrite the array with a new one and the controllers loose the reference
            // could also do tasks.length = 0, then push in the new items
            angular.copy(response, tasks);
        });
    };
    
    return {
        tasks: tasks,
        fetch: fetch
    };
});

angular.module('TaskManager').controller('FormCtrl', function($scope, $http, ServerUrl, TaskFactory, $q) {
    'use strict';
    
    $http.get(ServerUrl + 'categories').success(function(response) {
        $scope.categories = response;
    });
    
    $scope.tasks = TaskFactory.tasks;

    $scope.createCategory = function(category) {
        $scope.task = {};
        
        $http.post(ServerUrl + 'categories', category).success(function(response) {
            $scope.categories.push(response);
            
            $scope.category.name = '';
            
            $scope.task.category = response.id;
        });
    };
    
    $scope.createTask = function(task) {
        $http.post(ServerUrl + 'tasks', task).success(function(response) {
            $scope.tasks.push(response);
            
            $scope.task.name = '';
            $scope.task.category = '';
        });
    };
    
    $scope.removeCompleted = function() {
        var httpRequests = [];
        
        for (var i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].status === 2) {
                httpRequests.push($http.delete(ServerUrl + 'tasks/' + $scope.tasks[i].id));
            }
        }
        
        $q.all(httpRequests).then(function() {
            TaskFactory.fetch();
        });
    };
});

angular.module('TaskManager').controller('ListCtrl', function($scope, $http, ServerUrl, TaskFactory) {
    'use strict';
    
    $scope.tasks = TaskFactory.tasks;
    
    $scope.completeTask = function(task) {
        task.status = 2;
        
        $http.put(ServerUrl + 'tasks/' + task.id, task);
    };
});