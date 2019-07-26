import { MenuItem } from './MenuItem';

/**
 * The menu's class
 */
export class Menu {

	/**
	 * The items of the menu
	 */
	public items: MenuItem;

	/**
	 * Instantiates a new menu object
	 * @param items The items of the menu
	 */
	constructor(items: MenuItem) {
		this.items = items;
	}
}
