const fs= require("fs");
const process =require("process");
const fileName = process.argv[2];
const content = fs.readFileSync(fileName,'utf-8');
console.log(content);
console.log('after Sync');