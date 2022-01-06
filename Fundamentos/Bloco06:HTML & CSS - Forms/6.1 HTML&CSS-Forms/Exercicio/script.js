//acesso dos elementos do form
const nome = document.querySelector('#user-name');
const email = document.querySelector('#user-email');
const cpf = document.querySelector('#user-cpf');
const endereco = document.querySelector('#user-adress');
const cidade=document.querySelector('#user-city');
const btEnviar=document.querySelector('#submit');
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
        alert("digite sua cidade: ");
        cidade.style.backgroundColor='red';
    }else{
        arrayTeste=[];
        arrayTeste=cidade.value.split('');
        console.log(arrayTeste);
        if(arrayTeste.length>=28)
        alert('entre com uma cidade com no máximo 28 caracteres');
        
    }
   // 2parte da validação 
}
btEnviar.addEventListener('click',sendForm)
