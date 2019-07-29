import * as Discord from 'discord.js';
import { Emoji } from './constants/Emoji';
import { Config } from './types/Config';
import { processCommand } from './utils/commands';

/**
 * The core of the bot
 */
export class Bot {

	/**
	 * Initializes the bot
	 */
	public static async init(token: string | undefined, config: Config): Promise<void> {

		// Checking the validity of the token
		if (token) {

			// Instantiating the client
			const client = new Discord.Client();

			// Logging the bot in
			client.login(token);

			// Subscribing to the connection event
			client.on('ready', () => {

				// Getting the general channel
				const general = client.channels.get(config.channels.general) as Discord.TextChannel;

				// Getting salim's emoji
				const emoji1 = client.emojis.find((e) => e.name === Emoji.salim1).toString();
				const emoji2 = client.emojis.find((e) => e.name === Emoji.salim2).toString();

				// Sending a welcoming message
				general.send(`${emoji1} ${emoji2} Salim has dipped his finger in mayonnaise ${emoji2} ${emoji1}`);
			});

			// Subscribing to the message event
			client.on('message', (message) => {

				// Defining the prefix
				const prefix = '/';

				// Detecting if a command was issued
				if (message.content.startsWith(prefix) && !message.author.bot) {

					// Extracting the arguments
					const args = message.content
						.slice(prefix.length)
						.split(' ')
						.map((arg) => arg.toLocaleLowerCase());

					// Getting the command
					const cmd = args.shift();

					// Processing the command
					processCommand(message, cmd, args);
				}
			});
		} else {

			// Sending an error message
			console.error(`[STMF]: Invalid token!`);
		}
	}
}
