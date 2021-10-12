const process = require("process");
const userInput = process.argv[2];
const newArr = [23,5,63,58,94];

function sumOfArr(array){
    let sum=0;
    for(let i=0;i<array.length; i++){
        sum+=array[i]
    }
    return sum
}


// console.log(sumOfArr(newArr));

switch(userInput){
    case "max":{
        console.log(Math.max(...newArr));
        break;
    }
    case "min":{
        console.log(Math.min(...newArr));
        break;
    }
    case "sum":{
        console.log(sumOfArr(newArr));
        break;
    }
    case "avg":{
        console.log((sumOfArr(newArr))/newArr.length);
        break;
    }
    default:{
        console.log('Error');
   }
}