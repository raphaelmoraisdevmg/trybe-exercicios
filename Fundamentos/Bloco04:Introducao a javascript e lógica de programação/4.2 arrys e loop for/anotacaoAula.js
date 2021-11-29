/* varios objetos declarados usando variaveis
let pizza1="4 Queijos";
let pizza2="Frango com Catupiry";
let pizza3="Marguerita";
let pizza4="Chocolate";
let pizza5="Palmito";
console.log(pizza1,pizza2,pizza3,pizza4,pizza5);*/
//usando arrays
let pizzas=["4 Queijos","Frango com Catupiry","Marguerita","Palmito","Chocolate"];
pizzas.push("Peito de peru");
console.log(pizzas.length);
console.log(pizzas.sort());
console.log("Menu de sabores: "+pizzas);
for(let index = 0; index < pizzas.length ; index++){
    console.log(pizzas[index]);
}
/* código necessário para rodar a tabuada de um número sem for.
let numero=3;
 console.log(numero*1);
 console.log(numero*2);
 console.log(numero*3);
 console.log(numero*4);
 console.log(numero*5);
 console.log(numero*6);
 console.log(numero*7);
 console.log(numero*8);
 console.log(numero*9);
 console.log(numero*10);*/
 //abaíxo com for
 let numero = 7;
 for(let contador = 0; contador <= 10; contador++){
     let resultado=numero*contador;
     console.log(" "+numero+" * "+contador+" = "+resultado)
 }
 //usando for para a mensagem de boas vindas aos aulnos da trybe
 let nomes = ['Andre', 'Vitoria', 'Bruno'];
 for(let i=0; i < nomes.length; i++){
     console.log("Bem-Vindo(a) "+nomes[i]);
 }           