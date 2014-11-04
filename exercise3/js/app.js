// initialize the app
angular.module('Exercise3.filters', []);
angular.module('Exercise3', [
    'ngRoute',

    'Exercise3.filters',
]);

angular.module('Exercise3').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
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

angular.module('Exercise3.filters').filter('capitalize', function() {
    return function(param) {
        if (param) {
            return param[0].toUpperCase() + param.slice(1);
        }
    };
});
