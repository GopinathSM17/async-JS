/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

// const fs = require('fs');
import fs from 'fs/promises'

const writeAndDeletionOfTextFiles = ()=>{
    fs.mkdir(`../newDirectory`, {recursive : true})
    .then (()=>{
        for(let i=1;i<=5;i++){
            const filePath = `file${i}.json `;
            console.log(`file ${i} created`);
            fs.writeFile(`../newDirectory/${filePath}`, `I'm file ${i}`, 'utf-8' )
            .then(()=>{

                // Commented this line for better understanding
                // fs.rm(`./newDirectory/${filePath}`)

                console.log(`file ${i} deleted`);
            });
        }
    })
    .catch((err)=>{
        console.log(err);
    });
}


export {
    writeAndDeletionOfTextFiles
}