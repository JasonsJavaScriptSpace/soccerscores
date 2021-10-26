import { loadFileData, loadFileDataStream } from "./LoadFileData.js";
import constants from "../../helpers/constants.js";
import messages from "../../helpers/messages.js";

describe("Util > Read File", () => {

    beforeEach(() => {
        console.log = jest.fn();
    });
        
    afterAll(() => {
        jest.resetModules();
    })

    it("File Read: Should read in a file\'s data when passed a location of said file on the system", done => {
        const fileLocation = constants.DEFAULT_FILE_INPUT_LOCATION;

        loadFileData(fileLocation)
            .then(fileContents => {
                expect.assertions(3);
                expect(fileContents).toBeDefined();
                expect(typeof fileContents).toBe("object");
                expect(fileContents.length).toBe(13);
                done();
            })
            .catch(error => {
                console.log(error);
                done();
            })
    });

    it("File Stream: Should read a file\'s data stream when passed a location of said file on the system", done => {
        const fileLocation = constants.DEFAULT_FILE_INPUT_LOCATION;

        loadFileDataStream(fileLocation)
            .then(fileContents => {
                expect.assertions(3);
                expect(fileContents).toBeDefined();
                expect(typeof fileContents).toBe("object");
                expect(fileContents.length).toBe(13);
                done();
            })
            .catch(error => {
                console.log(error);
                done();
            })
    });

    it("File Read: Should throw error if no file location is passed", done => {
        const fileLocation = null;
        
        loadFileData(fileLocation)
            .then(fileContents => {
                expect(fileContents).toBe(null);
                done();
            })
            .catch(error => {
                expect.assertions(2);
                expect(error).toBeDefined();
                expect(error.message).toBe(messages.NO_FILE_FOUND);
                done();
            })
    })

    it("File Stream: Should throw error if no file location is passed", done => {
        const fileLocation = "";
        
        loadFileDataStream(fileLocation)
            .then(fileContents => {
                expect(fileContents).toBe(null);
                done();
            })
            .catch(error => {
                expect.assertions(3);
                expect(error).toBeDefined();
                expect(error.message).toBeDefined();
                expect(error.message).toBe(messages.NO_FILE_LOCATION_SPECIFIED);
                done();
            })
    })

    it("File Read: Should error if file location isnt valid", done => {
        const fileLocation = "./no_file_here.xyz";
        
        loadFileData(fileLocation)
            .then(fileContents => {
                expect(fileContents).toBe(null);
                done();
            })
            .catch(error => {
                expect.assertions(2);
                expect(error).toBeDefined();
                expect(error.message).toBe(messages.NO_FILE_FOUND);
                done();
            })
    })

    it("File Stream: Should error if file location isnt valid", done => {
        const fileLocation = "./no_file_here.xyz";
        
        loadFileDataStream(fileLocation)
            .then(fileContents => {
                expect(fileContents).toBe(null);
                done();
            })
            .catch(error => {
                expect.assertions(2);
                expect(error).toBeDefined();
                expect(error.message).toBe(messages.NO_FILE_FOUND);
                done();
            })
    })
});