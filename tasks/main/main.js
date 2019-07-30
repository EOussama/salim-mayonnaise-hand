/**
 * The package's main task
 */

// Importing the dependencies
var version = require("./version");

/**
 * Updates the package's version
 * 
 * @param {string} mode The mode of the version update (patch, minor, major, 1.36.3, 5.6.1...)
 */
module.exports.update = function (mode) {

  if (['patch', 'minor', 'major'].includes(mode)) {
    return version.sem(mode);
  } else {
    return version.specific(mode);
  }
}
