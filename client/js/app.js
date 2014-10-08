// initialize the app
angular.module('Demo', [
  'ngResource'
]);

// main controller
angular.module('Demo').controller('MainCtrl', function ($scope) {
    $scope.name = 'Dan';
});

// local user controller
angular.module('Demo').controller('LocalUserCtrl', function ($scope) {
    $scope.users = [{
        firstName: 'Dan',
        lastName: 'Johnson'
    }, {
        firstName: 'Ella',
        lastName: 'Johnson'
    }, {
        firstName: 'Ava',
        lastName: 'Johnson'
    }];
    
    $scope.addUser = function() {
        $scope.users.push({
            firstName: 'Jorden',
            lastName: 'Cayford'
        })
    };
});

// constants
angular.module('Demo').constant('ServerUrl', 'http://localhost:3000/');

// user factory
angular.module('Demo').factory('UserFactory', function($resource, ServerUrl) {
  return $resource(ServerUrl + 'users/:id');
});

// remote user controller
angular.module('Demo').controller('RemoteUserCtrl', function ($scope, $http, ServerUrl) {
    $http.get(ServerUrl + 'users').success(function(response) {
        $scope.users = response;
    });

    $scope.createUser = function(user) {
        $http.post(ServerUrl + 'users', user).success(function(response) {
            $scope.users.push(response);
        });
    };

    /*UserFactory.query(function(response) {
        $scope.users = response;
    });
    
    $scope.createUser = function(user) {
        UserFactory.save(user, function(response) {
            $scope.users.push(response);
        });
    };*/
});
