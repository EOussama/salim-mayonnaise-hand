/**
 * The versioning process of the Discord bot
 */

var path = require('path');
var gulp = require('gulp');
var bump = require('gulp-bump');
var replace = require('gulp-replace');

/**
 * Bumps the version
 * 
 * @param {string} mode The update mode (patch, minor, major)
 */
module.exports.sem = function (mode) {

  // Resolving the paths
  var packageDir = path.resolve(__dirname, './../../src/bot/');
  var packageFiles = path.resolve(packageDir, 'package*.json');
  var envFile = path.resolve(packageDir, '.env');

  // Getting the current version
  var currVersion = require(path.resolve(packageDir, 'package.json')).version;

  // Proccessing the task
  return gulp.src(envFile)
    .pipe(replace(/META_VERSION=.*/g, 'META_VERSION=' + currVersion))
    .pipe(gulp.dest(packageDir))
    .pipe(gulp.src(packageFiles))
    .pipe(bump({ type: mode }))
    .pipe(gulp.dest(packageDir));
}

/**
 * Sets the version to a specific value
 * 
 * @param {string} version The version to bump to
 */
module.exports.specific = function (version) {

  // Resolving the paths
  var packageDir = path.resolve(__dirname, './../../src/bot/');
  var packageFiles = path.resolve(packageDir, 'package*.json');
  var envFile = path.resolve(packageDir, '.env');

  // Proccessing the task
  return gulp.src(envFile)
    .pipe(replace(/META_VERSION=.*/g, 'META_VERSION=' + version))
    .pipe(gulp.dest(packageDir))
    .pipe(gulp.src(packageFiles))
    .pipe(bump({ version: version }))
    .pipe(gulp.dest(packageDir));
}
