const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const address='address';
    const deliveryPerson=order.order.delivery.deliveryPerson;
    const customerName=order['name'];
    const customerPhone=order['phoneNumber'];
    const customerStreet=order[address].street;
    const number=order[address].number;
    const apartament=order[address].apartment;
    return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone},${customerStreet} ${number} ${apartament}`
  }
  
  console.log(customerInfo(order));

  const orderModifier = (order) => {
    const newBuyer=order.name='luiz silva'
    const pizzas=Object.keys(order.order.pizza);
    const drinks=order.order.drinks.coke.type;
    const newTotal=order.payment.total='50';
    // Adicione abaixo as informações necessárias.
    return `Olá ${newBuyer}, o total do seu pedido foi de ${pizzas[0]},${pizzas[1]} e ${drinks} é r$ ${newTotal},00`
  }
  
 console.log (orderModifier(order));