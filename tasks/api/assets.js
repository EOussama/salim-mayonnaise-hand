/**
 * The versioning process of the Discord API
 */

// Importing the dependencies
var path = require('path');
var gulp = require('gulp');

// Resolving the paths
var packageDir = path.resolve(__dirname, './../../src/api/public');
var routePackageDir = path.resolve(__dirname, './../../');
var assets = path.resolve(routePackageDir, 'assets/**/*');

/**
 * Copies the assets files to the API's directory
 */
module.exports.copy = function () {

  // Proccessing the task
  return gulp.src(assets)
    .pipe(gulp.dest(packageDir));
}
