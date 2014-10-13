'use strict';

var nextId = 1;

var User = function(params) {
    this.id = nextId++;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.username = params.username;
    this.password = params.password;
    this.role = (typeof params.role === 'undefined') ? 2 : params.role; // ['admin', 'author', 'subscriber']
};

module.exports = User;