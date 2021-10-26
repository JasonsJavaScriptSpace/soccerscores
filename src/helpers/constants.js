const DEFAULT_FILE_INPUT_LOCATION = "./instructions/sample-input.txt";
const DEFAULT_FILE_OUTPUT_LOCATION = "./instructions/expected-output.txt";
const SUPPRESS_LOGGING = (process.env.SHOW_LOGGING !== "true");

const GAME_PARSER_TEAM_SEPERATOR = ",";
const GAME_PARSER_SCORE_SEPERATOR = " ";
const GAME_PARSER_POINT_MAPPER = Object.freeze({
    LOSS: 0,
    TIE: 1,
    WIN: 3,
});

export default Object.freeze({
    DEFAULT_FILE_INPUT_LOCATION,
    DEFAULT_FILE_OUTPUT_LOCATION,
    SUPPRESS_LOGGING,
    GAME_PARSER_TEAM_SEPERATOR,
    GAME_PARSER_SCORE_SEPERATOR,
    GAME_PARSER_POINT_MAPPER
});