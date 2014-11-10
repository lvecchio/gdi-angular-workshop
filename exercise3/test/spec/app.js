describe('Exercise3', function() {
    'use strict';

    var NavbarCtrl,
        scope,
        $location,
        capitalizeFilter;

    // mock the app module
    beforeEach(angular.mock.module('Exercise3'));

    // initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($controller, $rootScope, _$location_) {
        scope = $rootScope.$new();

        $location = _$location_;

        NavbarCtrl = $controller('NavbarCtrl', {
            $scope: scope
        });
    }));

    it('isActive() should return true when passed the current location', function() {
        $location.path('/about');

        expect($location.path()).toBe('/about');

        expect(scope.isActive('/about')).toBe(true);
    });

    it('isActive() should return false when passed a different location', function() {
        $location.path('/about');

        expect($location.path()).toBe('/about');

        expect(scope.isActive('/contact')).toBe(false);
    });

    it('capitalize filter should capitalize first letter in a string', function() {
        inject(function(capitalizeFilter) {
            expect(capitalizeFilter('dan')).not.toBe('dan');
            expect(capitalizeFilter('dan')).toBe('Dan');
        });
    });
});
