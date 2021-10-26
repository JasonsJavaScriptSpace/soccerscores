/**
 * File to hold any of the messages that will be output to the user.  This could be internationalized in the future as needed.
 */

// Error messages
const NO_FILE_FOUND = "File not found in specificed location.";
const NO_FILE_LOCATION_SPECIFIED = "No file location specified.";
const NO_ARGUMENTS_INCLUDED = "No arguments included. Using default file location.";
const PROVIDED_FILE_CANNOT_BE_PARSED_CORRECTLY = "Provided file cannot be parsed correctly.";

// Output messages
const MATCHDAY_TITLE = "Matchday";
const POINTS_TITLE = "pts";
const POINT_TITLE = "pt";

export default Object.freeze({
    MATCHDAY_TITLE,
    NO_ARGUMENTS_INCLUDED,
    NO_FILE_FOUND,
    NO_FILE_LOCATION_SPECIFIED,
    PROVIDED_FILE_CANNOT_BE_PARSED_CORRECTLY,
    POINTS_TITLE,
    POINT_TITLE
});