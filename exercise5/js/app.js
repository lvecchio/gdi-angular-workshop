// initialize the app
angular.module('Exercise5', []);

angular.module('Exercise5').directive('demoModal', function() {
    return {
        restrict: 'E',

        transclude: true,

        templateUrl: 'templates/modal.html',

        scope: {
            title: '@'
        }
    };
});
