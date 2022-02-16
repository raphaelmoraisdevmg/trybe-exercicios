const numbers =[19,21,30,3,45,22,15];

const verfiyEven =(number) => number%2 === 0;

const isEven=numbers.filter(verfiyEven);

console.log(isEven);

const isEven2=numbers.filter((number)=> number %2 ===0);

console.log(isEven2);