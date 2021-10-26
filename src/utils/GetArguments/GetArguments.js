/**
 * Read in command line arguments, then store them for later use.
 * 
 * Note: The 1st argument is the path to nodejs and 2nd argument is the location of the script to
 * execute, leaving the rest (`slice(2)`) to be the flags passed in
 * 
 * Note2: We really should be checking against a list of "flag-types" and validating the input from
 * the user, however if we were to do that, we should probably just use a 3rd-party library that 
 * has that functionality built in.
 */
 const getArguments = () => process?.argv?.slice(2) ?? [];
 
 export { getArguments, getArguments as default };