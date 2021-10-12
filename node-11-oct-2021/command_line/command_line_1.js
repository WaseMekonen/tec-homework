const p= require("process");
const numbers = [12,36,74,51,48];
const userNumber =Number(p.argv[2]);

function checkValue(value){
    return value == userNumber
}

const result = numbers.find(checkValue)
if(result == undefined){
    console.log('Value not Found');
}
else{
    console.log(result,numbers.indexOf(result));
}

