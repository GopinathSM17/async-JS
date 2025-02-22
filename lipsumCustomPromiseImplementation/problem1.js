import { 
    readFile,
    writeFile,
    removeFile,
    makeDir
 } from "./customFunctions.js";

 /*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
 const customPromiseProblem = ()=>{
     makeDir("./newDir");

     for(let i=1; i<=5; i++){
        const fileName = `file${i}`;
        writeFile(`./newDir/${fileName}.txt`, `I'm file ${i}`)
        .then(()=>{
            removeFile(`./newDir/${fileName}.txt`);
        })
     }
     
 }

 export {
    customPromiseProblem
 }