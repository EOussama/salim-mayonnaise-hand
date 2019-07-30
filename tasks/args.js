/**
 * Exctracs the passed arguments and 
 * formats them to a Javascript object
 * 
 * @param {string[]} argv The chain of raw arguments
 * @returns {object}
 */
module.exports.extract = function (argv) {

  // Getting the arguments
  var argsList = argv.splice(3);

  // Preparing the arguments object
  var args = {};

  // Looping through the argument list
  for (var i = 0; i < argsList.length; i++) {

    // Checking if the list still has arguments to extract
    if (i < argsList.length - 1) {

      // Getting the key
      var key = argsList[i].toLowerCase().substring(2);

      // Getting the value
      var value = argsList[i + 1].toLowerCase();

      // Adding the extracted argument to the collection
      args[key] = value;
    }
  }

  // Returning the arguments
  return args;
}
