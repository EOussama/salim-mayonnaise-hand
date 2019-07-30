/**
 * The versioning process of the package
 */

// Importing the dependencies
var path = require('path');
var gulp = require('gulp');
var bump = require('gulp-bump');

// Resolving the paths
var packageDir = path.resolve(__dirname, './../../');
var packageFiles = path.resolve(packageDir, 'package*.json');

/**
 * Bumps the version
 * 
 * @param {string} mode The update mode (patch, minor, major)
 */
module.exports.sem = function (mode) {

  // Proccessing the task
  return gulp.src(packageFiles)
    .pipe(bump({ type: mode }))
    .pipe(gulp.dest(packageDir));
}

/**
 * Sets the version to a specific value
 * 
 * @param {string} version The version to bump to
 */
module.exports.specific = function (version) {

  // Proccessing the task
  return gulp.src(packageFiles)
    .pipe(bump({ version: version }))
    .pipe(gulp.dest(packageDir));
}
