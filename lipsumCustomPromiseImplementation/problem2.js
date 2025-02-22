/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/


import {
    readFile,
    writeFile,
    removeFile,
    makeDir,
    appendFile
} from "./customFunctions.js";
const customPromiseProblem = () => {
    readFile("../data/lipsumPromise.txt")
        .then((data) => {

            const uppercaseData = data.toUpperCase();
            const filename = "upperCase.txt"
            return writeFile(`./newDir/${filename}`, uppercaseData);
        })
        .then(() => {
            const filename = "upperCase.txt"
            return writeFile(`./newDir/filnames.txt`, `${filename}`);
        })
        .then(() => {
            return readFile(`./newDir/filnames.txt`);
        })
        .then((data) => {
            return readFile(`./newDir/${data}`);
        })
        .then((data) => {
            let lowercaseData = data.toLowerCase();
            lowercaseData = lowercaseData.split(". ");
            lowercaseData = lowercaseData.join('\n');
            const filename = "lowerCase.txt";
            return writeFile(`./newDir/${filename}`, lowercaseData);
        })
        .then(() => {
            const filename = "lowerCase.txt";
            return appendFile(`./newDir/filnames.txt`, `\n${filename}`);
        })
        .then(() => {
            return readFile(`./newDir/filnames.txt`);
        })
        .then((data) => {
            const fileArray = data.split('\n');
            // console.log(fileArray);
            const sortedFile = "sorted.txt";
            let i = 0;
            for (const eachFile in fileArray) {
                const file = fileArray[eachFile];
                readFile(`./newDir/${file}`)
                    .then((data) => {
                        data = data.split('\n');
                        data = data.sort();
                        data = data.join('\n');
                        appendFile(`./newDir/${sortedFile}`, `${data}\n`)
                    })
            }
        })
        .then(() => {
            const sortedFile = "sorted.txt";
            return appendFile(`./newDir/filnames.txt`, `\n${sortedFile}`);
        })
        .then(() => {
            return readFile(`./newDir/filnames.txt`)
        })
        .then((data) => {
            let files = data.split('\n');
            for (const eachFile in files) {
                const element = files[eachFile];
                // commented this line for better understanding
                //removeFile(`./newDir/${element}`);
            }
        })
}
customPromiseProblem();

export {
    customPromiseProblem
}