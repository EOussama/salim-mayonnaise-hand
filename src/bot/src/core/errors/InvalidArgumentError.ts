/**
 * The error thrown when an argument
 * is not valid.
 */

import SalimError from './SalimError';

export default class InvalidArgumentError extends SalimError {

	/**
	 * The name of the error.
	 */
	public name: string = 'InvalidArgumentError';

	/**
	 * The message of the error.
	 */
	public message: string = 'An argument is not valid';

	/**
	 * Constructor with parameters.
	 *
	 * @param message The message of the error.
	 */
	constructor(message: string) {

		// Calling the parent class `SalimError`.
		super('');

		// Updating the error's message.
		this.message = message.length > 0 ? message : this.message;
	}
}
