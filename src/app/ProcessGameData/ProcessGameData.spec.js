import { processSingleGameData, processMatchDay } from ".";

import { loadFileData } from "../../utils/LoadFileData";
import constants from "../../helpers/constants";

describe("App > Process Single Game data to clean it up and be more managable ", () => {
    it("Should show TeamA won", () => {
        const gameData = "Team A 5, Team B 1";
        const result = processSingleGameData(gameData);

        expect(result).toBeInstanceOf(Object);
        expect(result.teams).toBeInstanceOf(Array);
        expect(result.teams[0]).toBe("Team A");
    });

    it("Should show if a game is a tie", () => {
        const gameData = "Team A 1, Team B 1";
        const result = processSingleGameData(gameData);

        expect(result).toBeInstanceOf(Object);
        expect(result.teams).toBeInstanceOf(Array);
        expect(result.teams[0]).toBe("Team A");
        expect(result.didGameTie).toBe(true);
    })
});

describe("App > Process Match day data to organize and format it as desired", () => {
    it("Loads in the sample data and then process it correctly", done => {
        loadFileData(constants.DEFAULT_FILE_INPUT_LOCATION)
            .then(sampleInput => {
                const testGameResults = sampleInput
                    .filter(item => item)
                    .map(processSingleGameData);
                const result = processMatchDay(testGameResults)

                expect.assertions(4);
                expect(result).toBeDefined();
                expect(typeof result).toBe("object");
                expect(Array.isArray(result)).toBe(true);
                expect(result.length).toBe(4);
                done();
            })
    });
});
