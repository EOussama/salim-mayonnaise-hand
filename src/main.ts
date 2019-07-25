/**
 * @name salim-the-mayonnaise-finger
 * @description A Discord bot that documents our struggle with finding the perfect place for lunch.
 * @author EOussama
 * @license MIT
 * @version 0.0.1
 */

import { Bot } from './classes/Bot';

import * as dotenv from 'dotenv-extended';

(() => {

	// Loading the environment variables
	dotenv.load();

	// Getting the token
	const token = process.env.TOKEN;

	// Bootstraping the bot
	Bot.init(token);
})();
