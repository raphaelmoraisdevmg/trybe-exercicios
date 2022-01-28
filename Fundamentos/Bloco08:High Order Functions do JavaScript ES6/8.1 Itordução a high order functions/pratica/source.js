// armazernar funcções em variaveis
const sum = (number1, number2) => {
    return number1 + number2;
  };
  // passar funcções como argumento para outras
  const sayHello = () => {
    return ('hello trybers');
  }
  
  const printGreeting = (callback) => {
      console.log(callback());
  }
  
  printGreeting(sayHello);
  // retornar uma função de outra 
  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));