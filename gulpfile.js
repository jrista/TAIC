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

gulp.task('dev', ['development:site', 'development:admin']);
gulp.task('dev:site', ['development:site']);
gulp.task('dev:admin', ['development:admin']);

gulp.task('watch:build', ['watch:build:site', 'watch:build:admin']);
gulp.task('watch:build:site', ['build:dev', 'watch']);
gulp.task('watch:build:admin', ['admin:build:dev', 'admin:watch']);

gulp.task('development', ['development:site', 'development:admin']);
gulp.task('development:site', ['run:development', 'watch']);
gulp.task('development:admin', ['admin:run:development', 'admin:watch'])

//gulp.task('production', ['run:production', 'watch']);

// TODO: Add other environments?

gulp.task('default', ['run']);