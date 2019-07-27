import { Message } from 'discord.js';

/**
 * Processes a said command
 *
 * @param message The message of the command
 * @param command The command to process
 * @param args The arguments of the command
 */
export function processCommand(message: Message, command: string | undefined, args: string[]) {

	switch (command) {

		/**
		 * Command: about
		 *
		 * Usage:
		 * 	-	/about
		 *
		 * Description: Displays general information about the bot
		 */
		case 'about': {
			console.log('/about');
			break;
		}

		/**
		 * Command: help
		 *
		 * Usage:
		 * 	-	/help
		 *
		 * Description: Displays a generic help manual about how to properly use the bot
		 */
		case 'help': {
			console.log('/help');
			break;
		}

		/**
		 * Command: ping
		 *
		 * Arguments:
		 * 	-	iterations: number
		 *
		 * Usage:
		 * 	-	/ping
		 * 	- /ping 3
		 *
		 * Description: Returns “pong” respectively at a given iteration
		 */
		case 'ping': {

			// Sanitizing the arguments
			const iterations: number = args.length === 0 ? 1 : parseInt(args[0], 10);

			// Checking the validity of the iteration argument
			if (!iterations || isNaN(iterations) || iterations <= 0) {

				// Alerting the user about the invalid iterations argument
				message.channel.send('The iterations argument must be a valid positive number!');
			} else {

				// Preparing the output variable
				let output: string = '';

				// Putting together the output
				output = new Array(iterations)
					.fill('pong')
					.join(' ')
					.substring(0, 2000);

				// Sending the message
				message.channel.send(output);
			}
			break;
		}
	}
}
