import { Rating } from './Rating';

/**
 * The restaurant's class
 */
export class Restaurant {

	/**
	 * The name of the restaurant
	 */
	public name: string;

	/**
	 * The phone number of the restaurant
	 */
	public phoneNumber: string;

	/**
	 * The restaurant's rating
	 */
	public rating: Rating;

	/**
	 * Instantiates a new restaurant object
	 *
	 * @param name The name of the restaurant
	 * @param phoneNumber The phone number of the restaurant
	 */
	constructor(name: string = '', phoneNumber: string = '') {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.rating = new Rating();
	}
}
