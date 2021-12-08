// sem o uso de objetos
/* let name='Marta';
let lastName='Silva';
let age=34;
let medals={ golden: 2, silver: 3 };
console.log("A jogadora "+name+lastName+" tem " +34+ " anos de idade") */

// com o uso de objetos
let player={
    name:"Marta",
    lastName:"Silva",
    age:34,
    medal:{ golden:2, silver:3},
  
}
 player.bestInTheWorld= [
    2006, 2007, 2008, 2009, 2010, 2018
]
console.log("A jogadora "+player.name+player.lastName+" tem " +player.age+ " anos de idade")
console.log("A jogadora "+player.name+player.lastName+" foi eleita a melhor jogadora do mundo por "+player.bestInTheWorld.length+ " vezes")
console.log("A jogadora possui "+player.medal.golden+" medalhas de ouro e "+player.medal.silver+" medalhas de prata");