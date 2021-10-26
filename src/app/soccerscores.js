import { processSingleGameData, processMatchDay } from "./ProcessGameData/index.js";

import {
    getArguments,
    messageLevels,
    showOutput,
    loadFileDataStream,
    isValidInput,
} from "../utils/index.js";

import constants from "../helpers/constants.js";
import messages from "../helpers/messages.js";

const { MATCHDAY_TITLE, NO_ARGUMENTS_INCLUDED } = messages;

/**
 * Method to get file location out of the passed in arugments, if no arguments are passed in,
 * then use the default file location.
 */
const getFileLocation = () => {
    const args = getArguments();

    if (args.length === 0) {
        showOutput(NO_ARGUMENTS_INCLUDED, messageLevels.INFORMATION)
        return constants.DEFAULT_FILE_INPUT_LOCATION;
    }

    //We are already acconting for if the file location is not passed in, so we cant unit test this line
    /* istanbul ignore next */
    return args[0];
}

/**
 * 
 * @param {array} finalData | final organized data that just needs to be formatted correctly for output
 * @returns 
 */
const formatOutput = finalData => finalData
    .map((matchDay, index) => (
        `${MATCHDAY_TITLE} ${index + 1}\n${matchDay.join("\n")}`
    ))
    .join("\n\n")

/**
 * Main entry point for the application.  This will be called by the nodejs runtime and will
 * trigger the rest of the application
 */
const soccerscores = async () => {
    const fileLocation = getFileLocation();

    const gameDataFile = await loadFileDataStream(fileLocation);
    const trimmedGameDataFile = gameDataFile.filter(item => item); //remove any blank lines that come back from the file

    if(isValidInput(fileLocation, trimmedGameDataFile)) {
        const gameResults = trimmedGameDataFile
            .map(processSingleGameData);  // format the data into a more usable format

        // after we get the game results in a format we like, then process that, and then format it before writing to the screen
        //also adding in extra newline characters to make the output look nicer
        process.stdout.write(`\n\n${formatOutput(processMatchDay(gameResults))}\n\n\n`);
    } else {
        showOutput(messages.PROVIDED_FILE_CANNOT_BE_PARSED_CORRECTLY, messageLevels.ERROR);
        //process.stdout.write(messages.PROVIDED_FILE_CANNOT_BE_PARSED_CORRECTLY);
    }
}

export { soccerscores, soccerscores as default };