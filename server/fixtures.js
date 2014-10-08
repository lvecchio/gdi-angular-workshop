'use strict';

var _ = require('lodash'),
    User = require('./domain/User.js'),
    repository = require('./repository.js');

var fixtures = (function() {
    var loadUsers = function() {
        var users = [{
            firstName: 'Dan',
            lastName: 'Johnson',
            username: 'user1',
            password: 'test123',
            role: 0
        }, {
            firstName: 'Ella',
            lastName: 'Johnson',
            username: 'user2',
            password: 'test123',
            role: 1
        }, {
            firstName: 'Ava',
            lastName: 'Johnson',
            username: 'user3',
            password: 'test123'
        }];
    
        _.forEach(users, function(item) {
            repository.users.push(new User(item));
        });
    };
    
    return {
        loadAll: function() {
            loadUsers();
        }
    };
})();

module.exports = fixtures;