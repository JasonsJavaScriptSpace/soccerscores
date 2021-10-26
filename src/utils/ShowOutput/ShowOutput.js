/**
 * Util file to color text in the conosle depending on level of severity.
 * If the level is not specified, it defaults to information
 */

import constants from "../../helpers/constants.js";

// color of text that will show in the console window to dictact the level of the message
const ERROR_MESSAGE_COLOR = "\x1b[31m";         // red
const INFORMATION_MESSAGE_COLOR = "\x1b[34m";   // blue
const RESET_MESSAGE_COLOR = "\x1b[0m";          // standard output color
const WARNING_MESSAGE_COLOR = "\x1b[33m";       // yellow

// Wrap up all the message levels for easier use
const messageLevels = Object.freeze({
    ERROR: ERROR_MESSAGE_COLOR,
    INFORMATION: INFORMATION_MESSAGE_COLOR,
    WARNING: WARNING_MESSAGE_COLOR,
    RESET: RESET_MESSAGE_COLOR
});

/**
 * Method to color the console output for better user experience
 * 
 * @param {string} message 
 * @param {string} level 
 */
const showOutput = (message, level=messageLevels.INFORMATION) => {
    if (level === messageLevels.ERROR || !constants.SUPPRESS_LOGGING) {
        console.log(level, message, messageLevels.RESET);
    }
}

export { messageLevels, showOutput, showOutput as default };