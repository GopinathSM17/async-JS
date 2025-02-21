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
            const stringData = JSON.stringify(data, null, 2);
            const upperCaseStringData = stringData.toUpperCase();
            const upperCaseLipsumFile = `lipsumUpperCaseOutput.txt`;
            fs.writeFile(`./lipsumDir/${upperCaseLipsumFile}`, upperCaseStringData, (err) => {
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
                            const lowerCaseLipsumData = data.toLowerCase();
                            const sentences = lowerCaseLipsumData.split(/(?<=[.!?])\s+/);
                            const lowerCaseLipsumFile = "lipsumLowerCaseOutput.txt";
                            fs.writeFile(`./lipsumDir/${lowerCaseLipsumFile}`, JSON.stringify(sentences,null,2), (err)=>{
                                if(err){
                                    console.error("write file sentences is unsuccessfull");
                                }
                                else{
                                    console.log("write file sentences is successfull")
                                    fs.appendFile(`./lipsumDir/filenames.txt`, `${lowerCaseLipsumFile}\n`, (err)=>{
                                        if (err) {
                                            console.error("writeFile on fileName is unsuccessful");
                                        }
                                        else {
                                            console.log("writeFile on filenames.txt is successful");
                                        }
                                    });
                                    const sorteddata = sentences.sort((a, b) => {
                                        let firstLetterA = a.charAt(0).toLowerCase();
                                        let firstLetterB = b.charAt(0).toLowerCase();
                                        return firstLetterA.localeCompare(firstLetterB);
                                      });
                                    // console.log(sentences);
                                    const sortedLipsumFile = "lipsumSortOutput.txt";
                                    fs.writeFile(`./lipsumDir/${sortedLipsumFile}`, JSON.stringify(sentences,null,2), (err)=>{
                                        if(err){
                                            console.error("write file on sort file is Unsuccess");
                                        }
                                        else{
                                            console.log("write file for LipsumSortFile is success");
                                            fs.appendFile(`./lipsumDir/filenames.txt`, `${sortedLipsumFile}`, (err)=>{
                                                if(err){
                                                    console.error("writefile in filenames.txt in unsucess");
                                                }
                                                else{
                                                    console.log("writeFile in filenames.txt is successfull");
                                                }
                                            });
                                            fs.readFile("./lipsumDir/filenames.txt", "utf-8", (err,data)=>{
                                                if(err){
                                                    console.error("reading the filenames.txt file is unsuccessful");
                                                }
                                                else{
                                                    console.log("redaing the fileNames.txt is successful");
                                                    const eachFile = data.split('\n');
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
                            });
                        }
                    });
                }
            });
        }
    });
}
export {lipsumReadWrite}