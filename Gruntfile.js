module.exports = function(grunt) {

    'use strict';
    var gruntConfig = {

        pkg: grunt.file.readJSON('package.json'),

        // ========= Lint JS =========
        jshint: {
            all: ['app/**/*.js']
        },

        // ========= Concatenate JS =========
        concat: {
            to_min: {
                src: [
                    'app/**/*.js'
                ],
                dest: 'partial/js/to_min.js'
            },
            from_min: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-aria/angular-aria.min.js',
                    'bower_components/angular-messages/angular-messages.min.js',
                    // 'bower_components/angular-cookies/angular-cookies.min.js',
                    // 'bower_components/angular-ui-notification/dist/angular-ui-notification.min.js',
                    'bower_components/angular-google-maps-native/dist/angular-google-maps-native.min.js',
                    // 'bower_components/textAngular/dist/textAngular-rangy.min.js',
                    // 'bower_components/textAngular/dist/textAngular-sanitize.min.js',
                    // 'bower_components/textAngular/dist/textAngular.min.js',
                    // 'bower_components/angular-gettext/dist/angular-gettext.min.js',
                    'bower_components/angular-material/angular-material.js',
                    'partial/js/to_min.js'
                ],
                dest: 'prod/js/all.min.js'
            }
        },

        // ========= Uglify JS =========
        uglify: {
            dist: {
                files: {
                    'partial/js/uglified.min.js': ['partial/js/to_min.js']
                }
            }
        },

        // ========= Compile SASS =========
        sass: {
            dist: {
                files: {
                    'partial/css/compiled_sass.css': 'app/**/*.scss'
                }
            }
        },
        cssmin: {
            dist: {
                src: [
                    'bower_components/angular/angular-csp.css',
                    'bower_components/angular-material/angular-material.min.css',
                    // 'bower_components/angular-loading-bar/build/loading-bar.min.css',
                    // 'bower_components/textAngular/dist/textAngular.css',
                    // 'bower_components/ng-img-crop/compile/minified/ng-img-crop.css',
                    'partial/css/*.css',
                    'app/**/*.css'
                ],
                dest: 'prod/css/all.min.css'
            }
        },

        // ========= Copy =========
        copy: {
            main: {
                files: [
                    {
                        cwd: 'app/',
                        expand:true,
                        src: ['**/*'],
                        dest: 'prod/'
                    }
                ]
            }
        },

        // ========= Clean semi-processed files =========
        clean: ['partial'],

        // ========= Files to WATCH =========
        watch: {
            dist: {
                files: ['app/**/*'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }

    };

    grunt.initConfig(gruntConfig);

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-changed');


    // Tasks
    grunt.registerTask('default', [
        'jshint',
        'changed:copy',
        'concat:to_min',
        'uglify',
        'concat:from_min',
        'sass',
        'cssmin',
        'clean'
    ]);

};

