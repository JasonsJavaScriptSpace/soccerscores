import constants from "../../helpers/constants.js";
import messages from "../../helpers/messages.js";

const { TIE, WIN, LOSS } = constants.GAME_PARSER_POINT_MAPPER;
const { POINTS_TITLE, POINT_TITLE } = messages;

/**
 * method to split up the game data by the amount of games per match day
 * 
 * @param {array} gameData 
 * @param {number} gamesPerDay 
 * @returns 
 */
const splitGameDataIntoMatchDays = (gameData, gamesPerDay) => {
    const matchDays = [];

    for (let i = 0; i < gameData.length; i += gamesPerDay) {
        matchDays.push(gameData.slice(i, i + gamesPerDay));
    }

    return matchDays;
}

/**
 * method to process match day data. Will organize, sort, and format the data into a desired format
 * 
 * @param {array} matchDayList list of info for each game on a match day
 * @returns processed match day data
 */
const processMatchDayData = matchDayList => {
    //object to store all the teams match scores
    const teams = {};
    const processedMatchData = [];

    //loop through each match day, then loop through each game in the match day
    matchDayList.forEach(matchDay => {
        matchDay.forEach(game => {
            const [teamA, teamB] = game.teams;

            //if the keymap for a team doesnt exist, create it with a score of 0.
            teams[teamA] = teams[teamA] || { score: 0 };
            teams[teamB] = teams[teamB] || { score: 0 };

            if (game.didGameTie) {
                teams[teamA].score += TIE;
                teams[teamB].score += TIE;
            } else {
                teams[teamA].score += WIN;
                teams[teamB].score += LOSS;
            }
        })
        
        //sort the teams by score and then return the first 3 items
        const sortedTeamsByScoreThenName = Object
            .keys(teams)
            .sort((a, b) => (
                teams[b].score - teams[a].score || teams[a] <  - teams[b]
            ))
            .slice(0, 3);

        //Add formated team score to the returned data list
        processedMatchData.push(
            sortedTeamsByScoreThenName
                .map(team => ( `${team}, ${teams[team].score} ${teams[team].score > 1 ? POINTS_TITLE : POINT_TITLE}` ))
        );
    });

    return processedMatchData;
};

/**
 * Main method that will ultimately organize the game date and format it for the user
 * 
 * @param {array} allGameData | array of objects containing game data
 * @returns the processed game data
 */
const processMatchDay = allGameData => processMatchDayData(splitGameDataIntoMatchDays(allGameData, 3));

export { processMatchDay, processMatchDay as default };