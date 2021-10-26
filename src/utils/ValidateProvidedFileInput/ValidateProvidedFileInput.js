/*
    Util file to validate that a file is able to be parsed in this application.
*/


/**
 * Regular expression to validate the score line item.
 * 
 * is broken down as follows:
 * 
 * /^                           # start of string
 *  ([A-Za-z ])                 # look for alphanumeric characters (upper and lowercase) and spaces
 *      + ([0-9])               # look for a space followed by a number
 *          +,+ ([A-Za-z ])     # look for a comma followed by a space then followed alphanumeric characters (upper and lowercase) and spaces
 *              + ([0-9])       # look for a space followed by a number
 *                  +$          # look for the end of string
 *                      /gm     # match multiline flag and global flag
 */
const scoreLineItemRegex = /^([A-Za-z ])+ ([0-9])+,+ ([A-Za-z ])+ ([0-9])+$/gm;
 
/**
 * Method to test if the file data and file that was loaded are valid and can be parsed by this application.
 * 
 * @param {string} fileLocation - location of file that was loaded in
 * @param {array} fileData - list of lines in the file data
 * @returns boolean - true if the file is valid, false otherwise
 */
const isValidInput = (fileLocation, fileData) => {
    const isValidFileData = fileData
        .every(line => scoreLineItemRegex
            .test(line
                .match(scoreLineItemRegex)));

    return (fileLocation.endsWith(".txt") && isValidFileData);
 };
 
 export { isValidInput, isValidInput as default };