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
    const acess=document.querySelector('#elementoOndeVoceEsta').firstElementChild.nextElementSibling;
    console.log(acess);
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

//parte 2
/*Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho .
*/
function brother(){
let corpo=document.body;
let brother = document.createElement('div'); //criei o elemento no js
brother.style.width='200px'
brother.style.height='200px';
brother.style.backgroundColor='orange';
brother.innerText='acabei de ser criado e sou irmão do elementoOndeVoceEsta';
corpo.appendChild(brother);
}
brother();
function son(){
const acess=document.querySelector('#elementoOndeVoceEsta');
let son=document.createElement('div');
son.style.width='155px';
son.style.height='155px';
son.style.background='yellow';
son.innerText='sou um filho de elementoOndeVoceEsta';
acess.appendChild(son);
}
son();
function firstChildOfSon(){
    const firstSon=document.querySelector('#primeiroFilhoDoFilho');
    let sonOfSon=document.createElement('div');
    sonOfSon.style.width="100px"
    sonOfSon.style.height="100px"
    sonOfSon.style.backgroundColor="grey";
    sonOfSon.innerText="sou o primeiro filho do filho. ";
    firstSon.appendChild(sonOfSon);
}
firstChildOfSon();