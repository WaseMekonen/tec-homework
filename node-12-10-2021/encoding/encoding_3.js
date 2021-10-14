const { error } = require("console");
const fs = require("fs");
const newFile = "text1.txt";
console.log("app is loading");

fs.writeFile(newFile,'hello bullshit world',(err,data)=>{
    if(err){
        console.log("File not exist");
    }
     return data
});
fs.readFile(newFile,"utf-8",(err,data)=>{
    if(err){
        console.log("file not loaded");
    }
    console.log("file is readed:",data);
});
