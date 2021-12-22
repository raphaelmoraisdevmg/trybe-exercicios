function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function renderDaysOfMonth(){
    let getDayList=document.querySelector('#days');
    for (let index=0;index<dezDaysList.length;index+=1){  //grantindo que todo o array de dias sera percorrido
        let day =dezDaysList[index]; //pegando o dia da iteração atual
        let dayItem=document.createElement('li'); // criando o elemento li correspondente.
        if(day ===24|day === 31){ // tratando os dias que são feriados é renederizando
            dayItem.className='day holiday'; //nomeando uma classe de acordo com o criteiro do exercício 
            dayItem.innerHTML=day;
            getDayList.appendChild(dayItem);
        }else if(day === 4|day === 11| day === 18){ //tratando os dias que são sexta-feira é renderizando
            dayItem.className='day  friday';
            dayItem.innerHTML=day;
            getDayList.appendChild(dayItem);
        }else if(day === 25){ // tratando o dia que é feriado e sexta-feira é rederizando
            dayItem.className='day holiday friday';
            dayItem.innerHTML=day;
            getDayList.appendChild(dayItem);
        }else{ // rederizando todo o resto dos dias que são comuns 
            dayItem.className='day';
            dayItem.innerHTML=day;
            getDayList.appendChild(dayItem);
        }
  }
}
  renderDaysOfMonth();
/*mplemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */ 
const buttonsContainer=document.querySelector('.buttons-container');
let btnFeriado=document.createElement('button');
btnFeriado.id='btn-holiday';
btnFeriado.innerHTML='feriados';
buttonsContainer.appendChild(btnFeriado);
/* Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/
btnFeriado.addEventListener('click',function(){
    const dayItemTarget=document.querySelectorAll('.day')
    for(let index=0;index<dayItemTarget.length;index +=1){
        let actualItem=dayItemTarget[index];
    if(actualItem.className.includes('holiday')){
        actualItem.style.color='red';
    }
}
})
/*Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */
let btnSexta = document.createElement('button');
btnSexta.id='btn-friday';
btnSexta.innerHTML="Sexta-Feira";
buttonsContainer.appendChild(btnSexta)
btnSexta.addEventListener('click',function(){
    const target=document.querySelectorAll('.day');
    for(let index=0;index<target.length;index+=1){
        let actual=target[index];
        if(actual.className.includes('friday')){
            actual.innerHTML="Sexta-feira"
        }
    }
})