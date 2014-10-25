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

    $scope.localUsers = [{
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
        $scope.localUsers.push({
            firstName: 'Jorden',
            lastName: 'Cayford'
        });
    };
});

angular.module('Demo').constant('ServerUrl', 'http://localhost:3000/');

// remote user controller
angular.module('Demo').controller('RemoteUserCtrl', function($scope, $http, ServerUrl) {
    'use strict';

    $http.get(ServerUrl + 'users').success(function(response) {
        $scope.remoteUsers = response;
    });

    $scope.createUser = function(user) {
        $http.post(ServerUrl + 'users', user).success(function(response) {
            $scope.remoteUsers.push(response);

            $scope.user = {};
        });
    };

    $scope.deleteUser = function(user) {
        $http.delete(ServerUrl + 'users/' + user.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.remoteUsers.length; i++){
                if ($scope.remoteUsers[i].id == user.id) {
                    $scope.remoteUsers.splice(i, 1);

                    break;
                }
            }
        });
    };
});
