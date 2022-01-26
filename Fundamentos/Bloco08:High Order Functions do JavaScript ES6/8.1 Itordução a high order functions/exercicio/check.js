const checkAnswers= (right_answers,student_answers)=>{
    let qtdCertas = 0;
    let qtdErradas =0;
    for(let index = 0;index <= right_answers.length; index += 1){
        for(let item = 0 ; item <= student_answers.length; item += 1){
            if(student_answers[item] === right_answers[index]){
                qtdCertas += 1;
            }else if(student_answers[item] === 'N.A'){
                qtdCertas = qtdCertas;
                qtdErradas = qtdErradas;
            }else{
                qtdErradas += -0.5;
            }
        }
        return `certas: ${qtdCertas} | erradas: ${qtdErradas}`;
    }
}
console.log(checkAnswers(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'],
['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']));