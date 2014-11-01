// initialize the app
angular.module('Exercise4.directives', []);
angular.module('Exercise4', [
    'Exercise4.directives',
]);

angular.module('Exercise4.directives').directive('demoDirective', function() {
    return {
        restrict: 'E', // element
        
        template: '<p>Hello World!</p>',

        link: function($scope, element, attrs) {
            element.on('click', function() {
                alert('Hello');
            });
        }
    };
});
