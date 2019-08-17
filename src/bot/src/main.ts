/**
 * @name salim-the-mayonnaise-finger
 * @description A Discord bot that documents our struggle with finding the perfect place for lunch.
 * @author EOussama
 * @license MIT
 * @version 0.0.1
 */

import * as dotenv from 'dotenv-extended';
import { Bot } from './core/Bot';
import { Config } from './core/types/Config';

(() => {

	// Loading the environment variables
	dotenv.load();

	// Getting the token
	const token = process.env.TOKEN_LOGIN;

	// Getting the rest of the config
	const config: Config = {
		channels: {
			general: process.env.CHANNEL_GENERAL || '',
			salim: process.env.CHANNEL_SALIM || '',
		},
		meta: {
			name: process.env.META_NAME || '',
			version: process.env.META_VERSION || '',
		},
		prefix: process.env.PREFIX || '/',
	};

	// Bootstraping the bot
	Bot.init(token, config);
})();
