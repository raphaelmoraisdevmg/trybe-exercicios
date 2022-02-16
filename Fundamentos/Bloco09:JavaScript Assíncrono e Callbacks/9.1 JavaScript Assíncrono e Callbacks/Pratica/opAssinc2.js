const pushNumbers = (list,number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumbers(numbers,1),3000);
pushNumbers(numbers,2);
pushNumbers(numbers,3);

setTimeout(()=>console.log(numbers),3000);