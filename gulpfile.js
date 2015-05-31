var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
    requireDir = require('require-dir');

// Bring in all the gulp tasks
requireDir('./scripts/gulp');

// Root gulp tasks, to be initiated from command line:
//   If you have your NODE_ENV set, you can simply execute
//   'gulp run' and the server will start for the appropriate
//   environment. To start the server explicitly for $scope
//   given environment, type 'gulp <env>', such as 'gulp dev'.

gulp.task('run', [env]);
gulp.task('dev', ['run:development', 'watch']);

gulp.task('development', ['run:development', 'watch']);
//gulp.task('production', ['run:production', 'watch']);

// TODO: Add other environments?

gulp.task('default', ['run']);