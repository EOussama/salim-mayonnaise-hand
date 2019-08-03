import { MenuItemTypes } from '../enums/MenuItemType';

/**
 * The Menu-item's class
 */
export class MenuItem {

	/**
	 * The name of the item
	 */
	public name: string;

	/**
	 * The price of the item
	 */
	public price: number;

	/**
	 * The type of the item
	 */
	public type: MenuItemTypes;

	/**
	 * The picture of the item
	 */
	public picture: string;

	/**
	 * Instantiates a new menu-item object
	 *
	 * @param name The name of the item
	 * @param price The price of the item
	 * @param type The type of the item
	 * @param picture The picture of the item
	 */
	constructor(
		name: string = '',
		price: number = 0,
		type: MenuItemTypes = MenuItemTypes.Food,
		picture: string = '',
	) {
		this.name = name;
		this.price = price;
		this.type = type;
		this.picture = picture;
	}
}
