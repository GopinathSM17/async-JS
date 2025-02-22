
import fs from 'fs'

const readFile =(path)=>{
    const pr = new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    });
    return pr;
}

const writeFile = (path, data)=>{
    const pr = new Promise((resolve, reject)=>{
        fs.writeFile(path , data, (err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("write success");
            }
        })
    })
    return pr;
}

const removeFile = (path)=>{
    const pr = new Promise((resolve,reject)=>{
        fs.rm(path, (err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("deletion success");
            }
        })
    })
    return pr;
}

const makeDir = (path)=>{
    const pr = new Promise((resolve, reject)=>{
        fs.mkdir(path, { recursive: true }, (err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("create Directory success");
            }
        })
    })
    return pr;
}

const appendFile = (path, data)=>{
    const pr = new Promise((resolve, reject)=>{
        fs.appendFile(path, data, (err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("append success");
            }
        })
    })
    return pr;
}


export{
    readFile,
    writeFile,
    removeFile,
    makeDir,
    appendFile
}