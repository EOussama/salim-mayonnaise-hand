/**
 * The Discord bot's main task
 */

var version = require("./version");

/**
 * Updates the Discord bot's version
 * 
 * @param {string} mode The mode of the version update (patch, minor, major, 1.36.3, 5.6.1...)
 */
module.exports.version = function (mode) {

  if (['patch', 'minor', 'major'].includes(mode)) {
    return version.sem(mode);
  } else {
    return version.specific(mode);
  }
}
