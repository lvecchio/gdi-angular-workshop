// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';
    
    $scope.name = 'Dan';
});

// local user controller
angular.module('Demo').controller('LocalUserCtrl', function($scope) {
    'use strict';
    
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

angular.module('Demo').constant('ServerUrl', 'http://localhost:3000/');

// remote user controller
angular.module('Demo').controller('RemoteUserCtrl', function($scope, $http, ServerUrl) {
    'use strict';
    
    // use $http
    $http.get(ServerUrl + 'users').success(function(response) {
        $scope.users = response;
    });

    $scope.createUser = function(user) {
        $http.post(ServerUrl + 'users', user).success(function(response) {
            $scope.users.push(response);
        });
    };
    
    $scope.deleteUser = function(user) {
        $http.delete(ServerUrl + 'users/' + user.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.users.length; i++){
                if ($scope.users[i].id == user.id) {
                    $scope.users.splice(i, 1);
                    
                    break;
                }
            }
        });
    };
});
