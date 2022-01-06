//acesso dos elementos do form
const nome = document.querySelector('#user-name');
const email = document.querySelector('#user-email');
const cpf = document.querySelector('#user-cpf');
const endereco = document.querySelector('#user-adress');
const cidade=document.querySelector('#user-city');
const curriculum=document.querySelector('#resume-area');
const cargo=document.querySelector('#user-job')
const descCargo=document.querySelector('#description-area')
const data=document.querySelector('#start-date');
const btEnviar=document.querySelector('#submit');
const btLimpar=document.querySelector('#clear-button');
let arrayTeste=[];

function sendForm(event){
    event.preventDefault();
    if(nome.value===''||nome.value===' '){
        alert("digite seu nome: ");
        nome.style.backgroundColor='red';
    }else{
        arrayTeste=nome.value.split('');
        if(arrayTeste.length>=40)
            alert('entre com um nome com no máximo 40 caracteres');
        
    }
    if(email.value===''||email.value===' '){
        alert("digite seu email: ");
        email.style.backgroundColor='red';
    }else{
        arrayTeste=[];
        arrayTeste=email.value.split('');
        if(arrayTeste.length>=50)
        alert('entre com um email com no máximo 50 caracteres');
        
    }
    if(cpf.value===''||cpf.value===' '){
        alert("digite seu cpf: ");
        cpf.style.backgroundColor='red';
    }else{
        arrayTeste=[];
        arrayTeste=cpf.value.split('');
        if(arrayTeste.length>=11)
        alert('entre com um cpf com no máximo 11 caracteres');
        
    }
    if(endereco.value===''||endereco.value===' '){
        alert("digite seu cpf: ");
        endereco.style.backgroundColor='red';
    }else{
        arrayTeste=[];
        arrayTeste=endereco.value.split('');
        if(arrayTeste.length>=200)
        alert('entre com um endereço com no máximo 200 caracteres');
        
    }
    if(cidade.value===''||cidade.value===' '){
       cidade.style.backgroundColor='red';
       alert('digite o nome da sua cidade:');
    }else{
        arrayTeste=[];
        arrayTeste=cidade.value.split('');
        if(arrayTeste.length>=28)
        alert('entre com uma cidade com no máximo 28 caracteres');
        
    }
   // 2parte da validação 
   if(curriculum.value===''||curriculum.value===' '){
    alert("digite seu curriculum de maneira resumida: ");
    curriculum.style.backgroundColor='red';
}else{
    arrayTeste=[];
    arrayTeste=curriculum.value.split('');
    if(arrayTeste.length>=1000)
    alert('entre com um resumo com até 1000 caracteres');
    
}
if(cargo.value===''||cargo.value===' '){
    alert("digite seu cargo de maneira resumida: ");
    cargo.style.backgroundColor='red';
}else{
    arrayTeste=[];
    arrayTeste=curriculum.value.split('');
    if(arrayTeste.length>=40)
    alert('entre com um cargo com até 40 caracteres');
    
}
if(descCargo.value===''||descCargo.value===' '){
    alert("digite a descrição do cargo  de maneira resumida: ");
    descCargo.style.backgroundColor='red';
}else{
    arrayTeste=[];
    arrayTeste=curriculum.value.split('');
    if(arrayTeste.length>=500)
    alert('entre com uma descrição de cargo  de até 500 carateres');
    
}
function validaData(date){
    if(startDate===''|startDate===' '){
        alert('digite uma data no formato DD/MM/YYYY');
        data.style.backgroundColor='red';
    }else{
        const arrayDate=startDate.split('/');
        const day=parseInt(arrayDate[0]);
        const month=parseInt(arrayDate[1]);
        const year=parseInt(arrayDate[2]);
        let flag=true;
        if(day > 0 && day <= 31){
            console.log('dia valido');
        }else{
            flag=false;
        }
        if(month >= 1 && month <= 12){
            console.log('mês valido');
        }else{
        flag=false;
        }
        if(year > 0 && year <=2021){
        console.log('data valida')
    }else{
        flag=false;
    }
    if(flag===false){
        alert('data invalida digite de novo: formato (DD/MM/YY)')
    }else{
        console.log('data valida');
    }
    }
    }

let startDate=data.value
validaData(startDate);
}
btEnviar.addEventListener('click',sendForm);
function limpaCampos(event){
    event.preventDefault();
    nome.value='';
    email.value='';
    cpf.value='';
    endereco.value='';
    cidade.value='';
    curriculum.value='';
    cargo.value='';
    descCargo.value='';
    data.value='';
}
btLimpar.addEventListener('click',limpaCampos);