let car={
    type:'Fiat',
    model:'500',
    color:'white'
};
//acessando os atributos do car
console.log("O carro da marca "+car.type+" é do modelo "+car.model+" é um veículo muito bom principalmente na cor " + car.color);
//dias da semana
let diasDaSemana={
    1:'domingo',
    2:'segunda',
    3:'terça',
    4:'quarta',
    5:'quinta',
    6:'sexta',
    7:'sabado',
};
// acessando um dos valores
console.log(diasDaSemana['2']);
console.log(diasDaSemana['6']);
// acessando os valores de outra maneira
let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4
  //for/in
  