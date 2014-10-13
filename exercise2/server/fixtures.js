'use strict';

var _ = require('lodash'),
    Category = require('./domain/Category.js'),
    Task = require('./domain/Task.js'),
    repository = require('./repository.js');

var fixtures = (function() {
    var loadCategories = function() {
        var categories = [];
    
        _.forEach(categories, function(item) {
            repository.categories.push(new Category(item));
        });
    };
    
    var loadTasks = function() {
        var tasks = [];
    
        _.forEach(tasks, function(item) {
            repository.tasks.push(new Task(item));
        });
    };
    
    return {
        loadAll: function() {
            loadCategories();
            loadTasks();
        }
    };
})();

module.exports = fixtures;