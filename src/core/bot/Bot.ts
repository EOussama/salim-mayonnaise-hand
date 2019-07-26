import * as Discord from 'discord.js';
import { Emoji } from './constants/Emoji';

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

				// Getting salim's emoji
				const emoji1 = client.emojis.find((e) => e.name === Emoji.salim1).toString();
				const emoji2 = client.emojis.find((e) => e.name === Emoji.salim2).toString();

				// Sending a welcoming message
				general.send(`${emoji1} ${emoji2} Salim has dipped his finger in mayonnaise ${emoji2} ${emoji1}`);
			});
		} else {

			// Sending an error message
			console.error(`[STMF]: Invalid token!`);
		}
	}
}
