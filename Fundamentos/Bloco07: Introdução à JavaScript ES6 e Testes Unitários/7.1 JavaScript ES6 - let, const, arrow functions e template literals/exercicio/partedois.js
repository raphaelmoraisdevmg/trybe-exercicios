/*2 Crie uma função que receba uma frase e retorne qual a maior palavra.*/
const maiorPlavra= function (string){
    let plavra=string.split(' ');
     maiorItem=plavra.sort(
        (stra,strb)=>{
            return strb.length - stra.length;
    })
    let maior=''
    maior=plavra[0]
    console.log(maior)
}
maiorPlavra('Eu testo os afazeres');

const changeWorld= (world) =>{
    let phrase=`Tryber ${world} aqui`
    return phrase;
}
console.log(changeWorld('bebeto'));