// initialize the app
angular.module('Exercise4.directives', []);
angular.module('Exercise4', [
    'Exercise4.directives',
]);

angular.module('Exercise4').controller('DemoCtrl', function($scope) {
    $scope.alertFeedback = function(feedback) {
        alert('Name: ' + feedback.name + '\nComments: ' + feedback.comments);
    };
});

angular.module('Exercise4.directives').directive('demoLorem', function() {
    return {
        restrict: 'E', // element

        template: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    };
});

angular.module('Exercise4.directives').directive('demoClickable', function() {
    return {
        restrict: 'A', // attribute

        link: function($scope, element) {
            // element is wrapped at jQuery object
            element.bind('click', function() {
                alert('Hello');
            });
        }
    };
});

angular.module('Exercise4.directives').directive('demoFeedback', function() {
    return {
        restrict: 'E',
        scope: {
            placeholder: '@', // one way expression, outside in
            submitAction: '&' // one way behavior, inside out, uses parent scope to execute
        },
        templateUrl: 'templates/feedback.html'
    };
});
