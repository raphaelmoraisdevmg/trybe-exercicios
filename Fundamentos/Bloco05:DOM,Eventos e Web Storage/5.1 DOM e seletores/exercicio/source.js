  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
       function textChange(){
           const text= document.getElementById('futuro');
           text.innerHTML="No futuro espero ter aprendido todo o conteúdo de softskill e hardskill da trybe e espero estar bem empregado.";
       }
       textChange()
       function colorChange(){
        document.getElementsByClassName('main-content')[0].style.backgroundColor="rgb(76,164,109)";
        }
       colorChange();
       function changer(){
         document.getElementsByClassName('center-content')[0].style.backgroundColor="white";
       }
       changer();
       function rigthText(){
         const title=document.getElementsByClassName('title')[0];
         title.innerHTML="Exercício 5.1 - Java Scripit"
       }
       rigthText();
       function capitalText(){
         document.getElementsByTagName('p')[0].style.textTransform="capitalize";
        }
       capitalText();
       function consoleText(){
         const p = document.getElementsByTagName('p');
         console.log(p)
       }
       consoleText();