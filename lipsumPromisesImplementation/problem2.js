/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

import { log } from 'console';
import { readFile } from 'fs';
import fs from 'fs/promises'

const promiseProblem = () => {
    fs.readFile("../data/lipsumPromise.txt", 'utf-8')
        .then((data) => {
            const uppercaseData = data.toUpperCase();
            return uppercaseData;
        })
        .then((data) => {
            const fileName = "upperCase.txt";
            return fs.writeFile(`./lipsumFilesDirectory/${fileName}`, data)
        })
        .then(() => {
            const fileName = "upperCase.txt";
            return fs.writeFile(`./lipsumFilesDirectory/filenames.txt`, `${fileName}`)
        })
        .then(() => {
            return fs.readFile(`./lipsumFilesDirectory/filenames.txt`, 'utf-8')
        })
        .then((data) => {
            return fs.readFile(`./lipsumFilesDirectory/${data}`, 'utf8')
        })
        .then((data) => {
            const fileName = "lowerCase.txt";
            let sentences = data.toLowerCase();
            sentences = sentences.split(". ");
            // sentences= sentences.sort();
            sentences = sentences.join('\n');
            fs.appendFile(`./lipsumFilesDirectory/filenames.txt`, `\n${fileName}`);
            return fs.writeFile(`./lipsumFilesDirectory/${fileName}`, sentences);
        })
        .then(() => {
            return fs.readFile(`./lipsumFilesDirectory/filenames.txt`, 'utf-8')
        })
        .then((data) => {
            const files = data.split('\n');
            return files;
        })
        .then((data) => {
            const sortedFile = "sorted.txt";
            return fs.appendFile(`./lipsumFilesDirectory/filenames.txt`, `\n${sortedFile}`);
        })
        .then(() => {
            const sortedFile = "sorted.txt";
            return fs.writeFile(`./lipsumFilesDirectory/${sortedFile}`, "")
        })
        .then(() => {
            return fs.readFile(`./lipsumFilesDirectory/filenames.txt`, 'utf8')
        })
        .then((data) => {
            const files = data.split('\n');
            for (const file in files) {
                const fileName = files[file];
                fs.readFile(`./lipsumFilesDirectory/${fileName}`, 'utf-8')
                    .then((data) => {
                        const sortedFile = "sorted.txt";
                        data = data.split('\n');
                        data = data.sort();
                        data = data.join('\n');
                        fs.appendFile(`./lipsumFilesDirectory/${sortedFile}`, `${data}\n`);
                    })
            }
        })
        .then(() => {
            return fs.readFile(`./lipsumFilesDirectory/filenames.txt`, 'utf8')
        })
        .then((data)=>{
            let files = data.split('\n');
            for (const eachFile in files) {
                    const element = files[eachFile];
                    //commented this line for better understanding
                    // fs.rm(`./lipsumFilesDirectory/${element}`);
            }
        })
}

promiseProblem();