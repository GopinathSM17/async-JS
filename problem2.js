/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/
import fs from 'fs'



const lipsumReadWrite = function () {
    fs.readFile('./data/lipsum.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("reading file is Unsuccessful");
        }
        else {
            const upperCaseLipsumData = data.toUpperCase();
            const upperCaseSentences = upperCaseLipsumData.split(/(?<=[.!?])(?:\s+|\\n+)/);
            const upperCaseSentencesArray = [];
            for (const line in upperCaseSentences) {
                const eachLine = upperCaseSentences[line];
                upperCaseSentencesArray.push(eachLine.replaceAll("\\n", " ").replaceAll("\\", " "));
            }

            const upperCaseLipsumFile = `lipsumUpperCaseOutput.txt`;
            fs.writeFile(`./lipsumDir/${upperCaseLipsumFile}`, JSON.stringify(upperCaseSentencesArray, null, 2), (err) => {
                if (err) {
                    console.error("write the Uppercase file unsuccessful");
                }
                else {
                    console.log("write the Uppercase file successful");
                    fs.writeFile(`./lipsumDir/filenames.txt`, `${upperCaseLipsumFile}\n`, (err) => {
                        if (err) {
                            console.error("writeFile on fileName is unsuccessful");
                        }
                        else {
                            console.log("writeFile on filenames.txt is successful");
                        }
                    });
                    fs.readFile(`./lipsumDir/${upperCaseLipsumFile}`, 'utf8', (err, data) => {
                        if (err) {
                            console.error("reading the file " + upperCaseLipsumFile + " is unsuccessfull");
                        }
                        else {
                            const uppercaseArray = JSON.parse(data);
                            const lowerCaseLipsumArray = [];

                            for (const line in uppercaseArray) {
                                const element = uppercaseArray[line];
                                lowerCaseLipsumArray.push(element.toLowerCase());
                            }

                            const lowerCaseLipsumFile = "lipsumLowerCaseOutput.txt";
                            fs.writeFile(`./lipsumDir/${lowerCaseLipsumFile}`, JSON.stringify(lowerCaseLipsumArray, null, 2), (err) => {
                                if (err) {
                                    console.error("write file sentences is unsuccessfull");
                                }
                                else {
                                    console.log("write file sentences is successfull")
                                    fs.appendFile(`./lipsumDir/filenames.txt`, `${lowerCaseLipsumFile}\n`, (err) => {
                                        if (err) {
                                            console.error("writeFile on fileName is unsuccessful");
                                        }
                                        else {
                                            console.log("writeFile on filenames.txt is successful");
                                        }
                                    });

                                    fs.readFile(`./lipsumDir/${lowerCaseLipsumFile}`, "utf-8", (err, data) => {
                                        if (err) {
                                            console.error("read file of lowcase file is unsuccess");
                                        }
                                        else {
                                            console.log("read file of lower case file is success");

                                            const sortedLipsumFile = "lipsumSortOutput.txt";
                                            
                                            const lowerCaseArray = JSON.parse(data);

                                            const sortedArray = lowerCaseArray.sort();

                                            fs.writeFile(`./lipsumDir/${sortedLipsumFile}`, JSON.stringify(sortedArray, null, 2), (err) => {
                                                if (err) {
                                                    console.error("write file on sort file is Unsuccess");
                                                }
                                                else {
                                                    console.log("write file for LipsumSortFile is success");
                                                    fs.appendFile(`./lipsumDir/filenames.txt`, `${sortedLipsumFile}`, (err) => {
                                                        if (err) {
                                                            console.error("writefile in filenames.txt in unsucess");
                                                        }
                                                        else {
                                                            console.log("writeFile in filenames.txt is successfull");
                                                        }
                                                    });
                                                    fs.readFile("./lipsumDir/filenames.txt", "utf-8", (err, data) => {
                                                        if (err) {
                                                            console.error("reading the filenames.txt file is unsuccessful");
                                                        }
                                                        else {
                                                            console.log("redaing the fileNames.txt is successful");

                                                            // commented the deleting process for clear understanding
                                                            // const eachFile = data.split('\n');
                                                            // console.log(eachFile);
                                                            // eachFile.forEach(fileName => {
                                                            //     fs.rm(`./lipsumDir/${fileName}`, (err)=>{
                                                            //         if(err){
                                                            //             console.error("deletion of file unsucessfull");
                                                            //         }
                                                            //         else{
                                                            //             console.log(`deletion of file name ${fileName} is succesful`);
                                                            //         }
                                                            //     });
                                                            // });
                                                        }
                                                    });
                                                }
                                            })
                                        }
                                    })
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
export { lipsumReadWrite }