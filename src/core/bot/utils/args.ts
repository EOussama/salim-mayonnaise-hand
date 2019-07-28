import { TextChannel, DMChannel, GroupDMChannel } from "discord.js";

/**
 * Extracts a given argument
 * 
 * @param args The arguments to extract from
 * @param index The index of the argument to extract
 * @param def The fallback value of the extraction
 * 
 */
export const getArg = (args: any[], index: number, def: any = ''): string => hasArgs(args, index) ? args[index] : def;

/**
 * Checks the validity of arguments
 * 
 * @param args The arguments to check
 * @param min The minimum arguments to check for
 */
export const hasArgs = (args: any[], min: number = 1): boolean => args.length >= min + 1;

/**
 * Validates the passedcondition and sends an error if neccessary
 * 
 * @param validity The validity to check for
 * @param error The error message to send
 * @param channel The channel to send the error message for
 */
export const validateArgs = (validity: boolean | 0 | '', error: string, channel: TextChannel | DMChannel | GroupDMChannel): boolean => {

  // Checking if the validity is false
  if (!validity) {

    // Sending an error message
    channel.send(error);
  }

  // Returning the validity
  return validity ? true : false;
}
