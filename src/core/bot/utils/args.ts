/**
 * Extracts a given argument
 * 
 * @param args The arguments to extract from
 * @param index The index of the argument to extract
 * @param def The fallback value of the extraction
 * 
 */
export const getArg = (args: any[], index: number, def: any = ''): string => {
  return hasArgs(args, index) ? args[index] : def;
}

/**
 * Checks the validity of arguments
 * 
 * @param args The arguments to check
 * @param min The minimum arguments to check for
 */
export const hasArgs = (args: any[], min: number = 1): boolean => args.length >= min;
