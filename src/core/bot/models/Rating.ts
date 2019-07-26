/**
 * The rating's class
 */
export class Rating {

	/**
	 * The price's rating
	 */
	public price: number;

	/**
	 * The quality's rating
	 */
	public quality: number;

	/**
	 * The hygiene's rating
	 */
	public hygiene: number;

	/**
	 * The service's rating
	 */
	public service: number;

	/**
	 * Instantiates a new rating object
	 *
	 * @param price The price's rating
	 * @param quality The quality's rating
	 * @param hygiene The hygiene's rating
	 * @param service The service's rating
	 */
	constructor(
		price: number = 0,
		quality: number = 0,
		hygiene: number = 0,
		service: number = 0,
	) {
		this.price = price;
		this.quality = quality;
		this.hygiene = hygiene;
		this.service = service;
	}
}
