/*
    Util file to read in a file and return the conents of the file.  If the file isnt found, then show an error to the user.
*/

import { access, createReadStream, readFile, F_OK } from "fs";

import {
    messageLevels,
    showOutput,
} from "../ShowOutput/index.js";
import messages from "../../helpers/messages.js";

/**
 * Method to read in a file and return the contents of the file that was read in. (non stream reading)
 * 
 * @param {string} fileLocation: location of the file to be read in.
 */
const loadFileData = fileLocation => new Promise((resolve, reject) => {
    if (fileLocation) {
        access(fileLocation, F_OK, err => {
            if (err) {
                reject(new Error(messages.NO_FILE_FOUND));
            } else {
                readFile(fileLocation, "utf8", (err, data) => {
                    // should never have an error here since we already checked if the file is accessible so we'll ignore it for the test coverage.
                    /* istanbul ignore next */
                    if (err) {
                        reject(new Error(messages.NO_FILE_FOUND));
                    } else {
                        // after file data has loaded in, then split the data into an array of lines.
                        resolve(data.toString().split("\n"));
                    }
                });
            }
        })
    } else {
        reject(new Error(messages.NO_FILE_FOUND));
    }
})

/**
 * Method to read in a filestream and return the contents of the file that was read in.
 * 
 * @param {string} fileLocation: location of the file to be read in.
 */
const loadFileDataStream = fileLocation => new Promise((resolve, reject) => {
    if (fileLocation) {
        access(fileLocation, F_OK, err => {
            const fileStream = createReadStream(fileLocation, {encoding: "utf8"});
            let fileData = [];
            
            if (err) {
                showOutput(messages.NO_FILE_FOUND, messageLevels.ERROR);
                reject(new Error(messages.NO_FILE_FOUND));
            }

            //since we already check that the file exist, we shouldnt get an error here.
            /* istanbul ignore next */
            fileStream.on("error", (err) => {
                showOutput(messages.NO_FILE_FOUND, messageLevels.ERROR);
                reject(new Error(messages.NO_FILE_FOUND));
            });

            fileStream.on("data", data => {
                fileData.push(data);
            });

            fileStream.on("end", () => {
                resolve(fileData.toString().split("\n"));
            });
        })
    } else {
        showOutput(messages.NO_FILE_LOCATION_SPECIFIED, messageLevels.ERROR);
        reject(new Error(messages.NO_FILE_LOCATION_SPECIFIED));
    }
});

export { loadFileData, loadFileDataStream, loadFileDataStream as default };