let age=20;
let fullName="Hulk";
/* uma const não pode ter seu valor alterado
const pi=3.14;
pi=3.15;
*/
console.log(age);
/*conecito de cammel case arpesentado e a variáveis são case sensitive */
console.log(fullName);

//tipos primitivos e tipagem dinamica
let movie= "Avengers"; // string
let score= 10.89 //number literal
let isValid=true; //boolean
let name; // undefined
let color=null; //null
//trypeOf() descobre qual o tipo da variavel passada por parametro
//aritimética
let salary= 3500;
/* console.log(salary+salary);
console.log(salary-salary);
console.log(salary*salary);
console.log(salary/salary);
console.log(3**3); */
salary++
console.log(salary);
salary--
console.log(salary);

//IF/ELSE
let trybe=16.42;
if(trybe >= 14 && trybe < 14.00){
    console.log("Esquenta");
}else if (trybe >= 16.30 && trybe < 17.50){
    console.log("Aula ao vivo");
}else if(trybe >=19.40 && trybe < 20){
    console.log("Fechamento");
}
else{
    console.log("Fora dos momentos síncronos");
}