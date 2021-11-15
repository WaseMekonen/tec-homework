// 1:




// 2:

const array1 = [];

for(let i=0; i<1000; i++){
    array1.push(i)
}

const newArray = array1.map(number=> (Math.sqrt(number)))
console.log(newArray);

// 3:

const arrayOfnum = [11,23,4,566,53,932,3,22];

const arrayOfOddNumbers = arrayOfnum.filter(num=> num%2==0);
console.log(arrayOfOddNumbers);