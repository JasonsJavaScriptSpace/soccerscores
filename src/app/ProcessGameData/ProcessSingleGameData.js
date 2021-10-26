import constants from "../../helpers/constants.js";

const {
    GAME_PARSER_TEAM_SEPERATOR,
    GAME_PARSER_SCORE_SEPERATOR
} = constants;

//Get the index of front the string indicating where the teams scrore starts
const findScoreIndex = teamGameInfo => teamGameInfo.lastIndexOf(GAME_PARSER_SCORE_SEPERATOR);

// Organize the team and score into a clean object that is easy to parse through
const organizeTeamAndScore = teamGameInfo => {
    const scoreIndex = findScoreIndex(teamGameInfo);
    const teamName = teamGameInfo.slice(0, scoreIndex).trim();
    const teamScore = Number(teamGameInfo.slice(scoreIndex).trim());

    return { teamName, teamScore };
}

/**
 * Process the game data that is passed in
 * 
 * @param {string} gameScoreData : string containing team names and scores
 * @returns cleaned up object with the 2 teams that played and if it was a tie game,  object is sorted by the winning team
 */
const processSingleGameData = singleGameScoreData => {
    //break apart each game data and organize
    const [teamA, teamB] = singleGameScoreData
        .split(GAME_PARSER_TEAM_SEPERATOR)
        .map(organizeTeamAndScore)
        .sort(({teamScore: a}, {teamScore:b}) => b - a)

    const teams = [teamA, teamB].map(({teamName}) => teamName);
    const didGameTie = teamA.teamScore === teamB.teamScore;

    return { teams, didGameTie };
}
 
export { processSingleGameData, processSingleGameData as default };