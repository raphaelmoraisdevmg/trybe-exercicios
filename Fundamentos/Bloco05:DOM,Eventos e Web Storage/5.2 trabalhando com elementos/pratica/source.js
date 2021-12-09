/* Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .
*/
console.log(document.getElementById('start').nextSibling)//nó
console.log(document.getElementById('start').nextElementSibling)// elemento

// respostas
function where(){
const ondeEstou=document.querySelector('#elementoOndeVoceEsta');
const pai=ondeEstou.parentElement.style.backgroundColor='green'; 
}
where()
function changeText(){
const filhoDoFilho=document.querySelector('#elementoOndeVoceEsta').firstElementChild
filhoDoFilho.innerText="Texto adicionado"
}
changeText();
function fatherSoon(){
    const father=document.querySelector('#pai');
    const soon=father.firstElementChild;
    console.log(soon);
}
fatherSoon();
function textAcess(){
    const acess=document.querySelector('#elementoOndeVoceEsta').firstElementChild.nextElementSibling
    console.log(acess)
}
textAcess();
function thirdChild(){
const acess=document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
console.log(acess);
}
thirdChild();
function fatherToLast(){
    const acess=document.querySelector('#pai').lastElementChild.previousElementSibling;
    console.log(acess);
}
fatherToLast();