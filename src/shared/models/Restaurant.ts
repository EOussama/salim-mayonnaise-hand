import { Menu } from './Menu';
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
	 * The pictures of the restaurant
	 */
	public pictures: string[];

	/**
	 * The restaurant's rating
	 */
	public rating: Rating;

	/**
	 * The menu of the restaurant
	 */
	public menu: Menu;

	/**
	 * Instantiates a new restaurant object
	 *
	 * @param name The name of the restaurant
	 * @param phoneNumber The phone number of the restaurant
	 * @param rating The rating of the restaurant
	 * @param menu The menu of the restaurant
	 */
	constructor(
		name: string = '',
		phoneNumber: string = '',
		pictures: string[] = [],
		rating: Rating = new Rating(),
		menu: Menu,
	) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.pictures = pictures;
		this.rating = rating;
		this.menu = menu;
	}
}
