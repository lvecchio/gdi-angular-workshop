// initialize the app
angular.module('Exercise3', ['ngRoute']);

angular.module('Exercise3').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('Exercise3').controller('NavbarCtrl', function($scope, $location) {
    'use strict';
    
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});