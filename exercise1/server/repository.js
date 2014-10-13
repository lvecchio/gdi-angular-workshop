'use strict';

var _ = require('lodash'),
    User = require('./domain/User.js');

var repository = (function() {
    var repo = {
        users: [],
        
        createUser: function(params) {
            var user = new User(params);
        
            repo.users.push(user);
        
            return user;
        },
        
        updateUser: function(id, params) {
            var user = _.find(repo.users, { 'id': parseInt(id) });
        
            // don't update primary key
            delete params.id;
        
            _.forIn(params, function(value, key) {
                user[key] = value;
            });
        
            return user;
        },
        
        deleteUser: function(id) {
            return _.remove(repo.users, { 'id': parseInt(id) });
        }
    };
    
    return repo;
})();

module.exports = repository;