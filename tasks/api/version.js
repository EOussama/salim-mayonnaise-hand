/**
 * The versioning process of the Discord API
 */

// Importing the dependencies
var path = require('path');
var gulp = require('gulp');
var bump = require('gulp-bump');
var replace = require('gulp-replace');

// Resolving the paths
var packageDir = path.resolve(__dirname, './../../src/api/');
var packageFiles = path.resolve(packageDir, 'package*.json');
var envFile = path.resolve(packageDir, '.env');

/**
 * Bumps the version
 * 
 * @param {string} mode The update mode (patch, minor, major)
 */
module.exports.sem = function (mode) {

  // Getting the current version
  var currVersion = require(path.resolve(packageDir, 'package.json')).version;

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
