import { getArguments } from "./GetArguments.js";

describe("Util > Get CLI Argument Flags", () => {
    const fileFlag = "--file";
    const fileLocation = "./instructions/sample-input.txt";

    const clearAllCLIArguments = () => {
        process.argv = [];
    }

    //reset any cli test arugments
    const resetFlags = () => {
        clearAllCLIArguments();
    
        // these 2 args are the first things set when running a node application from the command line
        process.argv.push(process.execPath); // add node execution path to args
        process.argv.push(process.cwd()); //add current workind directory to args
    }

    // clear flags before each test
    beforeEach(() => {
        resetFlags();
    });

    // clear flags after all tests have ran
    afterAll(() => {
        clearAllCLIArguments();
    })

    it("Should read in any flags that were passed in from the command line on application start", () => {
        //setup cli arguments
        process.argv.push(fileFlag);
        process.argv.push(fileLocation);

        const [flagA, argumentA] = getArguments();

        expect.assertions(2);
        expect(flagA).toBe(fileFlag);
        expect(argumentA).toBe(fileLocation);
    });

    it("Should return an empty array if no arugment flags are passed in", () => {
        const expectedReturn = getArguments();

        expect.assertions(1);
        expect(expectedReturn).toEqual([]);
    });

    it ("Should return an empty array if `node` process is undefined (should never happen)", () => {
        const storeProcess = process;
        process = null;
        const expectedReturn = getArguments();
        process = storeProcess;

        expect.assertions(1);
        expect(expectedReturn).toEqual([]);
    });
});