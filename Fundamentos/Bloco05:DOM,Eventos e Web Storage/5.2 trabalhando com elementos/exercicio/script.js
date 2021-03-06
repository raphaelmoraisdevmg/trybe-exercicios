//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titulo=document.createElement('h1');
titulo.innerText="Exercício 5.2 - JavaScript DOM";
//1 Adicione a classe title na tag h1 criada;  PARTE 2  
titulo.className="title";
const corpo=document.body;
corpo.appendChild(titulo);
//2 Adicione a tag main com a classe main-content como filho da tag body ;
let principal=document.createElement('main');
principal.className="main-content"
corpo.appendChild(principal);
//3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let seccaoUm=document.createElement('section');
seccaoUm.className="center-content";
principal.appendChild(seccaoUm);
//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let textoQualquer=document.createElement('p');
textoQualquer.innerText="Um texto qualquer adicionado";
seccaoUm.appendChild(textoQualquer);
//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let conteudoAEsquerda=document.createElement('section');
conteudoAEsquerda.className="left-content";
seccaoUm.appendChild(conteudoAEsquerda);
//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let conteudoADireita=document.createElement('section');
conteudoADireita.className="right-content";
seccaoUm.appendChild(conteudoADireita);
//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imagem=document.createElement('img');
imagem.src="https://picsum.photos/200";
imagem.className="small-image"
conteudoAEsquerda.appendChild(imagem);
//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let valores=[
    'Um',
    'Dois',
    'Três',
    'Quatro',
    'Cinco',
    'Seis',
    'Sete',
    'Oito',
    'Nove',
    'Dez'
]
let listaValores=document.createElement('ul');
listaValores.className="lista"
let valoresitem='';
for (let index = 0; index<valores.length;index +=1 ){
    valoresitem=document.createElement('li');
    valoresitem.className="item";
    valoresitem.innerHTML=valores[index];
    listaValores.appendChild(valoresitem);
}
conteudoADireita.appendChild(listaValores);
//9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
let palavras=['DOM','JAVA SCRIPT','CSS'];


for(let index=0;index<palavras.length; index+=1){
    let subTitulos=document.createElement('h3');
    subTitulos.innerHTML=palavras[index];
    //2 Adicione a classe description nas 3 tags h3 criadas; PARTE 2
    subTitulos.className="description"
    principal.appendChild(subTitulos)
}
//parte 2
//3 Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
seccaoUm.removeChild(conteudoAEsquerda)
//4 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
conteudoADireita.style.marginRight="auto";
//5 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
seccaoUm.style.backgroundColor="green";
//6 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
listaValores.lastChild.remove();// remove o ultimo filho nesse momento o 10
listaValores.lastChild.remove();// remove o ultimo filho nesse momento o 9
