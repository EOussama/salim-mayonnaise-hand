import * as Discord from 'discord.js';

/**
 * The core of the bot
 */
export class Bot {

	/**
	 * Initializes the bot
	 */
	public static async init(token: string | undefined): Promise<void> {

		// Checking the validity of the token
		if (token) {

			// Instantiating the client
			const client = new Discord.Client();

			// Logging the bot in
			client.login(token);

			// Subscribing to the connection event
			client.on('ready', () => {

				// Getting the general channel
				const general = client.channels.get('596827915153571882') as Discord.TextChannel;

				// Sending a welcoming message
				general.send('Salim has dipped his finger in mayonnaise! :salim:');
			});
		} else {

			// Sending an error message
			console.error(`[STMF]: Invalid token!`);
		}
	}
}
