var gulp = require('gulp');
var args = require('./tasks/args');
var bot = require('./tasks/bot/bot');

/**
 * Updates the version of the packages
 */
gulp.task('version', function () {

	// Extracting the arguments
	var argmnts = args.extract(process.argv);

	// Getting the type of the versioning
	var type = argmnts['bump'];

	// Checking if the bump is valid
	if (type) {

		// Bumping the version
		return bot.version(type);
	} else {

		// Raising an error
		console.error('[ERROR]: The “version” tasks is missing the bump argument (patch, minor, major, 1.36.3, 5.6.1...)');
	}
});
