console.log(`app is loading`);

const fs = require("fs");
const process = require("process");

const fileName = process.argv[2];
const content = process.argv[3];

fs.writeFileSync(fileName,content, {flag:'a'});

console.log("after writeFileSync");