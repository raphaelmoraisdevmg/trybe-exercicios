const string='teste'
const message = (string) => {
    console.log(string);
}
const messageConstructor= (frase) => {
    return message(frase)
}
// console.log(messageConstructor('teste de função'));
console.log(message(string));