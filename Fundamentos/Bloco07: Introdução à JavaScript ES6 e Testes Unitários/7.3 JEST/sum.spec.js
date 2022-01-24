const sum = require('./sum');
const myRemove= require('./sum');

describe('testando os retornos da funcção sum',() => {
    it(" testando se a função retorna resultado correto.",() => {
        expect(sum(5 ,4)).toBe(9); // testando se a função retorna resultado correto.
        expect(sum(0 ,0)).toBe(0);
       
    })

    it(" testando se a função retorna erro quando necessário.",() => {
        expect(sum('3',4)).toThrowError();
        expect(sum('3',4)).toThrowError('parameters must be numbers');
    })
});

