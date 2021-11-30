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
let qtditems = numbers.length;
mediaAritimetica=soma/qtditems;
console.log(" Essa foi a média aritimética:"+mediaAritimetica)
//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(mediaAritimetica > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor que 20");
}
//5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;
for(i = 0;i < numbers.length; i++){
    if(numbers[i] > maiorValor){
        maiorValor=numbers[i];
    }
}
console.log(" Esse foi o maior valor: "+maiorValor);
//6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let qtdNumImpar = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 ==1){
        qtdNumImpar++;
    }
}
if(qtdNumImpar===0){
    console.log("Não existe número impar ");
}else{
    console.log("Quantidade de número impar encontrados : "+qtdNumImpar);
}
//7 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let menorValor= maiorValor;
for(i=0;i<numbers.length;i++){
    if(numbers[i] < menorValor){
        menorValor=numbers[i];
    }
}
console.log(" Esse foi o menor valor: "+menorValor);
//8 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let tamanhoArray=25;
let numeros=[]
for(i=1;i<tamanhoArray+1;i++){
    numeros.push(i);
}
console.log(numeros);
//9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let resultado=0;
let resultados=[];
for(i=0;i<numeros.length;i++){
    resultado=numeros[i]/2;
    resultados.push(resultado);
}
for(i=0;i<resultados.length;i++){
    console.log(resultados[i]);
}