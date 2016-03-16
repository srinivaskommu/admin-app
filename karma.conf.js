// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],
        plugins: [
            require('phantomjs-polyfill'),
            require("karma-webpack"),
            require("karma-coverage"),
            require("karma-spec-reporter"),
            require("karma-sourcemap-loader"),
            require("karma-phantomjs-launcher"),
            require("karma-jasmine")
        ],
        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'spec',

            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],

        files: [
            // Grab all files in the app folder that contain .spec.
            //
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './config/webpack.tests.js'
        ],

        preprocessors: {
            // Reference: http://webpack.github.io/docs/testing.html
            // Reference: https://github.com/webpack/karma-webpack
            // Convert files with webpack and load sourcemaps
            './config/webpack.tests.js': ['webpack', 'sourcemap']
        },

        browsers: [
            // Run tests using PhantomJS
            'PhantomJS'
        ],

        singleRun: true,

        // Configure code coverage reporter
        coverageReporter: {
            dir: 'build/coverage/',
            type: 'html'
        },

        webpack: require('./webpack.config'),

        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: true
        }
    });
};
