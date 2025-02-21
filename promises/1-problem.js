/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/

const promiseProgram = ()=>{
    console.log("Program started");
    const pr = new Promise((resolve, rejects)=>{
       
        setTimeout(()=>{
            resolve("promise pr is resolved");
        }, 3000);
    });
    pr.then(()=>{
        //will get printed after 3 seconds
        console.log("Program complete");
    });

    // pending state
    console.log(pr);

    //logging "Program in progress..."
    console.log("program in progress");

}

promiseProgram();