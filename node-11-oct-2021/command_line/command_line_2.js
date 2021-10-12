const process = require("process");
const arrOfNum = [89,43,10,25,93];
const userString = process.argv[2];

let sum = 0
for(let i = 0; i<arrOfNum.length; i++){
    sum += arrOfNum[i]
}

if (userString === "sum"){
    console.log(`sum: ${sum}`);
}

let max = arrOfNum[0];
if(userString === "max"){
    for(let i = 1; i<arrOfNum.length; i++){
        if(max<arrOfNum[i]){
            max=arrOfNum[i]
        }
    }
    console.log(`sum: ${max}`);
}

let min= arrOfNum[0];
if(userString === "min"){
    for(let i=1; i<arrOfNum.length; i++){
        if(min>arrOfNum[i]){
            min=arrOfNum[i]
        }
    }
    console.log(`sum: ${min}`);
}

let avg = 0;
if(userString === "avg"){
    for(let i=0;i<arrOfNum.length; i++){
        avg+=arrOfNum[i];
    }
    console.log("avg:"+(avg/arrOfNum.length));
}

