import { Message } from 'discord.js';
import InvalidCommandError from './../errors/InvalidCommandError';
import * as Args from './args';
import SalimError from '../errors/SalimError';

/**
 * Processes a said command
 *
 * @param message The message of the command
 * @param command The command to process
 * @param args The arguments of the command
 *
 * @throws InvalidCommandError, InvalidArgumentError
 */
export const processCommand = (message: Message, command: string | undefined, args: string[]): void => {

	try {

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

				// Validating the arguments
				Args.validateArgs(
					iterations && !isNaN(iterations) && iterations > 0,
					'The iterations argument must be a valid positive number!',
				);

				Args.validateArgs(
					input && input.length > 0,
					'You must provide a valid input argument!',
				);

				// Preparing the output variable
				const output: string = new Array(iterations)
					.fill(input)
					.join(' ')
					.substring(0, 2000);

				// Sending the message
				message.channel.send(output);

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

				// Throwing InvalidCommandError
				throw new InvalidCommandError(`“**/${command}**” is not a valid command!`);
			}
		}
	} catch (error) {

		// Alering the user of any caught error
		message.channel.send((error as SalimError).message);
	}
};
