/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

// const fs = require('fs');
import fs from 'fs'


const writeAndDeletionOfTextFiles = function (data, directoryName) {


    fs.mkdir(`./${directoryName}`, { recursive: true }, (err) => {
        if (err) {
            return console.error("Directory creation unsuccessfull", err);
        }
        else {
            console.log("directory created successfully");
            for (let i = 1; i <= 5; i++) {
                const filename = `newFile${i}.json`;

                fs.writeFile(`./${directoryName}/${filename}`, JSON.stringify(data, null, 2), (err) => {
                    if (err) {
                        return console.error("file creation unsuccess", err);
                    }
                    else {
                        console.log("file created successfully", filename);
                        fs.rm(`./${directoryName}/${filename}`, (err) => {
                            if (err) {
                                return console.error("deletion unsuccessfull");
                            }
                            else {
                                return console.log("deletion successfull", filename);
                            }
                        });
                    }
                });
            }
        }
    });
}


export {
    writeAndDeletionOfTextFiles
}



