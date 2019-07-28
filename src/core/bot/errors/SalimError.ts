/**
 * Salim's error interface
 */
interface ISalimError {

	/**
	 * The name of the error
	 */
	readonly name: string;

	/**
	 * The message of the error
	 */
	message: string;
}

/**
	* Salim's custom errors
	*/
export default class SalimError extends Error implements ISalimError {

	/**
	 * The name of the error.
	 */
	public readonly name: string = 'SalimError';

	/**
	 * The message of the error.
	 */
	public message: string = 'There was something wrong with the mayonnaise!';

	/**
	 * Constructor with parameters.
	 *
	 * @param message The message of the error.
	 */
	constructor(message: string) {

		// Calling the parent class `SalimError`.
		super();

		// Updating the error's message.
		this.message = message.length > 0 ? message : this.message;
	}
}
