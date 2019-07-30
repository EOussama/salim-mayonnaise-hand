/**
 * The versioning process of the Discord bot
 */

var path = require('path');
var gulp = require('gulp');
var bump = require('gulp-bump');

/**
 * Bumps the version
 * 
 * @param {string} mode The update mode (patch, minor, major)
 */
module.exports.sem = function (mode) {

  // Resolving the path
  var packageDir = path.resolve(__dirname, './../../src/bot/');
  var packageFiles = path.resolve(packageDir, 'package*.json');

  return gulp.src(packageFiles)
    .pipe(bump({ type: mode }))
    .pipe(gulp.dest(path.resolve(packageDir)));
}

/**
 * Sets the version to a specific value
 * 
 * @param {string} version The version to bump to
 */
module.exports.specific = function (version) {

  // Resolving the path
  var packageDir = path.resolve(__dirname, './../../src/bot/');
  var packageFiles = path.resolve(packageDir, 'package*.json');

  return gulp.src(packageFiles)
    .pipe(bump({ version }))
    .pipe(gulp.dest(packageDir));
}
