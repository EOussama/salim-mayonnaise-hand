import * as Discord from 'discord.js';
import * as dotenv from 'dotenv-extended';

/**
 * The core of the bot
 */
export class Bot {

	/**
	 * Initializes the bot
	 */
	public static init(): void {

		// Loading the environment variables
		dotenv.load();

		// Instantiating the client
		const client = new Discord.Client();

		// Logging the bot in
		this.login(client);

		// Subscribing to the connection event
		client.on('ready', () => {

			console.log('Salim has successfully connected!');
		});
	}

	/**
	 * Logs the bot in
	 */
	public static login(client: any): void {

		console.log('Salim has dipped his finger in mayonnaise!');

		// Getting the token
		const token = process.env.TOKEN;

		// Returning the connection
		client.login(token);
	}
}
