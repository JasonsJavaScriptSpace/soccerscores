import { isValidInput } from ".";
import { loadFileData } from "../LoadFileData/index.js";

import constants from "../../helpers/constants.js";

describe("Util > ValidateProvidedFileInput", () => {

    beforeEach(() => {
        console.log = jest.fn();
    })

    afterAll(() => {
        jest.resetModules();
    })

    it("Should validate `true` if proper file is passed in to check", done => {
        const fileLocation = constants.DEFAULT_FILE_INPUT_LOCATION;

        loadFileData(fileLocation)
            .then(fileContents => {
                const isValid = isValidInput(fileLocation, fileContents);

                expect.assertions(2);
                expect(isValid).toBeDefined();
                expect(isValid).toBe(true);
                done();
            })
            .catch(error => {
                console.log(error);
                done();
            })
    })

    it("Should validate `false` if incorrect file is passed in to to check", done => {
        const fileLocation = constants.DEFAULT_FILE_OUTPUT_LOCATION;

        loadFileData(fileLocation)
            .then(fileContents => {
                const isValid = isValidInput(fileLocation, fileContents);

                expect.assertions(2);
                expect(isValid).toBeDefined();
                expect(isValid).toBe(false);
                done();
            })
            .catch(error => {
                console.log(error);
                done();
            })
    })

    it("should validate `false` if a non '.txt' file is passed in to check", done => {
        const fileLocation = constants.DEFAULT_FILE_INPUT_LOCATION + ".nontextextension";

        loadFileData(fileLocation)
            .then(fileContents => {
                const isValid = isValidInput(fileLocation, fileContents);

                expect.assertions(2);
                expect(isValid).toBeDefined();
                expect(isValid).toBe(false);
                done();
            })
            .catch(error => {
                console.log(error);
                done();
            })
    })
});