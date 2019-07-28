import * as Args from './args';
import { Message } from 'discord.js';

/**
 * Processes a said command
 *
 * @param message The message of the command
 * @param command The command to process
 * @param args The arguments of the command
 */
export const processCommand = (message: Message, command: string | undefined, args: string[]): void => {

	// Checking the command
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
		 * Command: echo
		 *
		 * Arguments:
		 * 	-	iterations: number
		 * 	-	input: string
		 *
		 * Usage:
		 * 	- /echo 3 salim
		 *
		 * Description: Returns and output respectively at a given iteration
		 */
		case 'echo': {

			// Sanitizing the arguments
			const iterations: number = parseInt(Args.getArg(args, 0, 1), 10);
			const input: string = Args.getArg(args, 1).trim();

			// Checking the validity of the iteration argument
			if (!iterations || isNaN(iterations) || iterations <= 0) {

				// Alerting the user about the invalid iterations argument
				message.channel.send('The iterations argument must be a valid positive number!');

				// Checking the validity of the input
			} else if (!input || input.length === 0) {

				// Alerting the user about the invalid iterations argument
				message.channel.send('You must provide a valid input argument!');
			} else {

				// Preparing the output variable
				const output: string = new Array(iterations)
					.fill(input)
					.join(' ')
					.substring(0, 2000);

				// Sending the message
				message.channel.send(output);
			}

			break;
		}


		/**
		 * Command: ping
		 *
		 * Usage:
		 * 	-	/ping
		 *
		 * Description: Returns “pong”
		 */
		case 'ping': {

			// Sending the message
			message.channel.send('pong');

			break;
		}

		// Catching all invalid commands
		default: {

			// Alerting the user about the invalid iterations argument
			message.channel.send(`“**/${command}**” is not a valid command!`);
		}
	}
}
