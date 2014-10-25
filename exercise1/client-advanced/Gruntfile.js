module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['Gruntfile.js', 'js/app.js'],
                tasks: ['jshint']
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'js/app.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
