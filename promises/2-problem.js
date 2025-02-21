/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

import { rejects } from "assert";
import { resolve } from "path";

const promiseProgram = ()=>{
    console.log("Program started");
    const pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise fulfilled");
        }, 3000);
        setTimeout(()=>{
            reject("promise rejected");
        }, 2000);
    });
    console.log(pr);
    console.log("Program in progress...");
    pr.then(()=>{
        console.log("Program complete");
    })
    .catch(()=>{
        console.log("Program failure");
    })
    
}
promiseProgram();