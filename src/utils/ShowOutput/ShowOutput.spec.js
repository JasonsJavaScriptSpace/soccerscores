import { messageLevels } from "./ShowOutput.js";
import messages from "../../helpers/messages.js";

describe("Util > ShowOutput", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV }; //make a copy of the old env variables adding in the variable for showing the logging
    })

    afterAll(() => {
        process.env = OLD_ENV; //restore the old env variables
    })

    it("Should call the console.log if logging is set to true", () => {
        process.env.SHOW_LOGGING = "true";
        console.log = jest.fn();

        const showOutput = require("./ShowOutput").default;
        const spy = jest.spyOn(console, "log");

        showOutput(messages.NO_FILE_FOUND, messageLevels.RESET);
        expect(spy).toHaveBeenCalled();
    })

    it("Should not call the console.log if logging is set to false", () => {
        process.env.SHOW_LOGGING = "false";
        console.log = jest.fn();

        const showOutput = require("./ShowOutput").default;
        const spy = jest.spyOn(console, "log");

        showOutput(messages.NO_FILE_FOUND);
        expect(spy).not.toHaveBeenCalled();
    })
})