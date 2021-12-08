// Exercícios da parte 1 objetos e for/in
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  //1-mprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
  console.log("Bem-vinda "+info.personagem);
  //2- Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
  info.recorrente="Sim";
  //3- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
  for(let keys in info){
      console.log(keys);
  }
  //4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
  for(let values of info){
      console.log(values);
  }