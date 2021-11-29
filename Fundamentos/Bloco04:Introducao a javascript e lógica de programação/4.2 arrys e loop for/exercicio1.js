let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for(let i = 0;i < numbers.length; i++){
    console.log(numbers[i]);
}
//2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma=0;
for( i = 0; i < numbers.length; i++){
    soma+=numbers[i];
    
}
console.log("Resultado da soma: "+soma);
//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritimetica = 0;
for( i = 0; i < numbers.length; i++){
    mediaAritimetica+=numbers[i];
}
mediaAritimetica;